const router = require('express').Router();
const hotelService = require('../services/hotelService');
const userService = require('../services/userService');
const {getErrorMsg} = require('../utils/errorHelpers');
const { isAuth, isGuests } = require('../middlewares/auth')


router.get('/create', isAuth,  (req,res) => {
    res.render('booking/index')
});

router.post('/create', isAuth,  async (req,res) => {
    const hotelData = {...req.body, owner: req.user._id};

    try {
        await hotelService.create(hotelData)
        res.redirect('/')
    } catch (error) {
        res.render('booking/index', {...req.body, error: getErrorMsg(error)})
    }
    
});

router.get('/:hotelId/details',  isAuth, async (req,res) => {

    try {
        const hotels = await hotelService.getOne(req.params.hotelId).lean();
        const isOwner = hotels.owner == req.user?._id;
        let isBooked = false
        hotels.bookedRoomsByUser.some(x => {
            if (x._id == req.user?._id) {
                isBooked = true;
            }
        });
        res.render('booking/details', {...hotels, isOwner, isBooked})
    } catch (error) {
        res.render('booking/details', {...hotels, error: getErrorMsg(error)})
    }
});

router.get('/:hotelId/edit',  isAuth, async (req,res) => {
    try {
        const hotels = await hotelService.getOne(req.params.hotelId).lean();
        res.render('booking/edit', {...hotels})
    } catch (error) {
        res.render('booking/details', {...hotels, error: getErrorMsg(error)})
    }
});

router.post('/:hotelId/edit', isAuth,  async (req,res) => {
    try {
        await hotelService.update(req.params.hotelId, {...req.body})
        res.redirect(`/hotel/${req.params.hotelId}/details`)
    } catch (error) {
        res.render(`/hotel/${req.params.hotelId}/details`, {...req.body, error: getErrorMsg(error)})
    }
});

router.get('/:hotelId/delete',  isAuth, async (req,res) => {
    try {
        await hotelService.delete(req.params.hotelId)
        res.redirect(`/`)
    } catch (error) {
        res.render(`/hotel/${req.params.hotelId}/details`, {...req.body, error: getErrorMsg(error)})
    }
});

router.get('/:hotelId/book',  isAuth, async (req,res) => {
    const theUser = await userService.FindById(req.user._id);
    const theHotel = await hotelService.getOne(req.params.hotelId);
    theHotel.bookedRoomsByUser.push(req.user._id);
    theHotel.rooms -= 1;
    theHotel.save();

    theUser.booked.push(theHotel);
    theUser.save();
    res.redirect(`/hotel/${req.params.hotelId}/details`)
});

module.exports = router;