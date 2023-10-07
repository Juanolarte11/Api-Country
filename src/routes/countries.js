const { Router } = require('express');
const router = Router();
const { getAllCountries, getCountriesId } = require('../handlers/activityCountries.js');


router.get('/', getAllCountries)
router.get('/:id', getCountriesId)


module.exports = router;




























// const { id } = req.params;
// let countries

// try {
//     if (id.length > 1) {
//         countries = await Country.findByPk(id,)

//         countries = {
//             id: countries.id,
//             name: countries.name,
//             image: countries.image,
//             continent: countries.continent,
//             capital: countries.capital,
//             subregion: countries.subregion,
//             area: countries.area,
//             population: countries.population,
//             activities: countries.activities.map((e) => {
//                 return {
//                     id: e.id,
//                     name: e.name,
//                     difficulty: e.difficulty,
//                     duration: e.duration,
//                     season: e.season
//                 }
//             })
//         }
//     }
//     res.json(countries)
// } catch (err) {
//     res.status(400).json(err.message)
// }