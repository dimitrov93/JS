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

router.get('/:hotelId/details', async (req,res) => {

    try {
        const hotels = await hotelService.getOne(req.params.hotelId).lean();
        const isOwner = hotels.owner == req.user?._id;
        res.render('booking/details', {...hotels, isOwner})
    } catch (error) {
        res.render('booking/details', {...hotels, error: getErrorMsg(error)})
    }
});

router.get('/:hotelId/edit', async (req,res) => {

    res.render('booking/edit')
});

module.exports = router;