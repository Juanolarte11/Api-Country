//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    const datos = await axios.get("https://restcountries.com/v3.1/all")
    const countries = datos.data.map(e => {
      if (e.capital === undefined) {
        e.capital = ["no hay capital"];
    }
      return{
        id: e.cca3,
        name: e.name.common,
        image:  e.flags.png, 
        continent: e.continents[0],
        capital: e.capital[0],
        subregion: e.subregion,
        region: e.region,
        languages: e.languages,
        area: e.area,
        population: e.population
      }
    })
    await Country.bulkCreate(countries)
    console.log('Creado :)');
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});