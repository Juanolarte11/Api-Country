const { postActivity, getAllActivity } = require("../controllers/activityController");


const postNewActivity = async (req, res) => {
    const parameters = req.body;
    try {
        const newActivity = await postActivity(parameters)
        res.status(200).json(newActivity);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getActivity = async (req, res) => {
    try {
        const activity = await getAllActivity()
        res.status(200).json(activity);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


module.exports = {
    postNewActivity,
    getActivity
}