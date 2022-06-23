const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const tripService = require('../services/tripService');
const {getErrorMsg} = require('../utils/errorHelpers');


router.get('/create', isAuth, (req,res) => {
    res.render('trips/create')
});

router.get('/:tripId/details', async (req,res) => {
    try {
        const loggedUser = req.user?._id;
        const tripData = await tripService.getOne(req.params.tripId).lean();
        const isOwner = tripData.creator._id == loggedUser;
        let availableSeats = false;
        if (tripData.seats > 0) {
            availableSeats = true;
        }
        res.render('trips/details', {...tripData, isOwner, loggedUser, availableSeats})
    } catch (error) {
        res.redirect('/trip/shared', {error: getErrorMsg(error)})
    }

});

router.get('/shared', async (req,res) => {
    let sharedTrips = await tripService.getAll().lean();
    res.render('trips/shared', {sharedTrips})
});

router.get('/:tripId/edit', async (req,res) => {
    const currentData = await tripService.getOne(req.params.tripId).lean();
    res.render('trips/edit', {...currentData})
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

router.post('/:tripId/edit', async (req,res) => {
    try {
        await tripService.update(req.params.tripId, {...req.body});
        res.redirect(`/trip/${req.params.tripId}/details`)
    } catch (error) {
        res.render(`trips/${req.params.tripId}/edit`, {...req.body, error: getErrorMsg(error)})
    }
});
module.exports = router;