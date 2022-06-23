const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const tripService = require('../services/tripService');
const {getErrorMsg} = require('../utils/errorHelpers');


router.get('/create', isAuth, (req,res) => {
    res.render('trips/create')
});

router.get('/details', isAuth, (req,res) => {
    res.render('trips/details')
});

router.get('/shared', isAuth, (req,res) => {
    res.render('trips/shared')
});


// ------------ POST ----------------- ///

router.post('/create', isAuth, async (req,res) => {
    const tripData = {...req.body, creator: req.user._id}

    try {
        await tripService.create(tripData);
        res.redirect('/trip/shared')
    } catch (error) {
        res.render('trips/create', {...req.body, error: getErrorMsg(error)})
    }
});
module.exports = router;