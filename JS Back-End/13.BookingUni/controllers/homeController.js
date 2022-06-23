const router = require('express').Router();
const hotelService = require('../services/hotelService');
const userService = require('../services/userService');
const {getErrorMsg} = require('../utils/errorHelpers');


router.get('/', async (req,res) => {

    try {
        const allHotels = await hotelService.getAll().lean();
        res.render('home', {allHotels})

    } catch (error) {
        res.render('home', {error: getErrorMsg(error)} )
    }
});

router.get('/profile', async (req,res) => {
        const theUser = await userService.FindById(req.user._id).lean();
        const userHotels = await userService.UserHotels(req.user._id).lean();
        console.log(userHotels);
        res.render('home/profile', {...theUser, ...userHotels})
});

module.exports = router;