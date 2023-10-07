const { getCountries, getCountryByName, getCountriesById } = require("../controllers/countrieController");


const getAllCountries = async (req,res) => {
    const { name } = req.body
    try {
        if (!name) {
            const allCountries = await getCountries()
            res.status(200).json(allCountries);
        }else{
            const country = await getCountryByName(name)
            res.status(200).json(country)
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getCountriesId = async (req, res) => {
    const { id } = req.params;
    try {
        if (id.length) {
            const countries = await getCountriesById(id)
            res.status(200).json(countries);
        }else{
            res.status(400).json({error: "id not received"});
        }
    } catch (error) {
        res.status(400).json({error: error});
    }
}


module.exports = {
    getAllCountries,
    getCountriesId
}