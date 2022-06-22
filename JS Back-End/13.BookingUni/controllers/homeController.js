const router = require('express').Router();
const hotelService = require('../services/hotelService');
const {getErrorMsg} = require('../utils/errorHelpers');


router.get('/', async (req,res) => {

    try {
        const allHotels = await hotelService.getAll().lean();
        res.render('home', {allHotels})

    } catch (error) {
        res.render('home', {error: getErrorMsg(error)} )
    }
});

module.exports = router;