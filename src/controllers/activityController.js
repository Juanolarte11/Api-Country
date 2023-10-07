const { Country, Activity } = require('../db.js');

const postActivity = async ({
    name,
    difficulty,
    duration,
    season,
    countries
}) => {
    if (!name || !difficulty || !duration || !season || !countries) {
        throw new Error("missing data to send")
    }
    console.log(countries);
    try {
        let activity = await Activity.create({ name, difficulty, duration, season })
        for (const countryName of countries) {
            const country = await Country.findOne({ where: { name: countryName } });
            if (country) {
                await activity.addCountry(country);
            }
        }
        let activityWithCountry = await Activity.findOne({
            where: { name: name },
            attributes: {
                exclude: ['updatedAt', 'createdAt'],
            },
            include: {
                model: Country,
                through: {
                    attributes: []
                }
            }
        })
        return activityWithCountry
    } catch (error) {
        throw new Error("Error al crear actividad y relacionar con país: " + error.message)
    }
}

const getAllActivity = async () => {
    try {
        let activity = await Activity.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'country_activity'],
            }})

        return activity

    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    postActivity,
    getAllActivity
}