const {Country,Activity} = require('../db.js');


const getCountries = async () => {
    try {
        const countries = await Country.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'country_activity'],
            },
            include: {
                model: Activity,
                attributes: {
                    exclude: ['country_activity'],
                },
            },
        });
        return countries
        
    } catch (error) {
        throw new Error(error)
    }
}

const getCountryByName = async (name) => {
    try {
        let country = await getCountries()
        country = country.filter(pais => pais.name === name)
        return country;
    } catch (error) {
        throw new Error(error)
    }
}

const getCountriesById = async (id) => {
    try {
        let country = await Country.findByPk(id.toUpperCase(), { 
            include: Activity 
        })
        if (country === null) {
            return "Id no found"
        }

        return country;
    } catch (error) {
        throw new Error(error)
    }
}


module.exports = {
    getCountries,
    getCountryByName,
    getCountriesById
}