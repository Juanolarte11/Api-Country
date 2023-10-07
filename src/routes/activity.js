const { Router } = require('express');
const { postNewActivity,getActivity } = require('../handlers/activityActivity');
const router = Router();


router.get('/', getActivity)
router.post('/', postNewActivity)


module.exports = router;