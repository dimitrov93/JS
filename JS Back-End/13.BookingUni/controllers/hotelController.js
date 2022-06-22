const router = require('express').Router();
const hotelService = require('../services/hotelService');
const {getErrorMsg} = require('../utils/errorHelpers');


router.get('/create', (req,res) => {
    res.render('booking/index')
});

router.post('/create', async (req,res) => {
    const hotelData = {...req.body, owner: req.user._id};

    try {
        await hotelService.create(hotelData)
        res.redirect('/')
    } catch (error) {
        res.render('booking/index', {...req.body, error: getErrorMsg(error)})
    }
    
});

module.exports = router;