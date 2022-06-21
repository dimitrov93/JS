const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const housingService = require('../services/housingService');
const {getErrorMsg} = require('../utils/errorHelpers');

router.get('/create', isAuth, (req,res) => {
    res.render('housing/create')
});

router.post('/create', isAuth, async (req,res) => {
    const housingData = {...req.body, owner: req.user._id};

    try {
        const house = await housingService.create(housingData);
        res.redirect('/')
    } catch (error) {
        res.render('housing/create', {...req.body, error: getErrorMsg(error)})
    }
});

router.get('/recent', async (req,res) => {
    const recentHousing = await housingService.getAll().lean();
    res.render('housing/recent', {recentHousing})
});

router.get('/:houseId/details', async (req,res) => {
    const recentHousing = await housingService.getOne(req.params.houseId).lean();
    const isUser = req.user?._id
    const isOwner = recentHousing.owner._id == req.user?._id

    const data = await housingService.getHouseAndUser(req.params.houseId).lean();
    let isJoined = false;
    if (data.rentedAHome.some(x => x._id == req.user._id)) {
        isJoined = true;
    }

    res.render('housing/details', {...recentHousing, isOwner, isUser, isJoined})
});

router.get('/:houseId/delete', isAuth, async (req,res) => {
    await housingService.delete(req.params.houseId)
    res.render('housing/recent')
});

router.get('/:houseId/edit', isAuth, async (req,res) => {
    const housing = await housingService.getOne(req.params.houseId).lean();
    res.render('housing/edit', {...housing})
});

router.post('/:houseId/edit', isAuth, async (req,res) => {

    try {
       await housingService.update(req.params.houseId, {...req.body});
       res.redirect(`/housing/${req.params.houseId}/details`)
    } catch (error) {
       res.render(`/`, {...req.body, error: getErrorMsg(error)})
    }
});

router.get('/:houseId/rent', isAuth, async (req,res) => {
    const recentHousing = await housingService.getOne(req.params.houseId);
    recentHousing.rentedAHome.push(req.user._id)
    recentHousing.availablePieces -= 1;
    recentHousing.save();
    res.redirect('/')
    // const isUser = req.user?._id
    // const isOwner = recentHousing.owner._id == req.user?._id
    // res.render('housing/details', {...recentHousing, isOwner, isUser})
});

module.exports = router;
