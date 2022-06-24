const { isAuth } = require('../middlewares/authMiddleware');
const router = require('express').Router();
const publicationService = require('../services/publicationService');
const { getErrorMsg } = require('../utils/errorHelpers');

router.get('/gallery', isAuth, async (req,res) => {
    const galleries = await publicationService.getAll().lean();
    res.render('publications/gallery', {title: 'Gallery Page', galleries})
});

router.get('/create', isAuth, (req,res) => {
    res.render('publications/create', {title: 'Create Page'})
});


router.post('/create', isAuth, async (req,res) => {
    const data = {...req.body, author: req.user._id};

    try {
        await publicationService.create(data);
        res.redirect('/publications/gallery')
    } catch (error) {
        res.render('publications/create', {...req.body, error: getErrorMsg(error)})
    }
});


module.exports = router;