// const { default: axios } = require('axios');
const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require('./countries.js');
const activities = require('./activity.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countries);
router.use('/activity', activities);

module.exports = router;


























// const { Country } = require('../db')
// const { getIdDB } = require('./controller')

// router.get('/countries', async (req, res) => {
//     try{
//         const allCountries = await Country.findAll();
//         res.status(200).json(allCountries);
//     }catch(err){
//         res.status(404).send(err.message);
//     }
// })

// router.get('/countries/:idCountry', async(req, res) => {
//     try{ 
//         let {idCountry} = req.params;
//         let result = await getIdDB(idCountry.toUpperCase());
//         res.json(result)
//     }catch(err){
//         res.status(404).json(err.message)
// }});

// router.get('/name', async(req, res) => {
//     console.log(req.query);
//     // const { name } = req.query;
//     // console.log(name);
//     res.status(200).json("si me dioooo ")
//     // try{
//     //     
//     //     console.log(name);
//     // }catch(err){
//     //     res.status(400).json(err.message)
//     // }
// })


module.exports = router;
