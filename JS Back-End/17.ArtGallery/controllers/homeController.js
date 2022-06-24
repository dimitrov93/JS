const { isAuth } = require('../middlewares/authMiddleware');
const publicationService = require('../services/publicationService');
const userService = require('../services/userService');
const { getErrorMsg } = require('../utils/errorHelpers');
const router = require('express').Router();

router.get('/', async (req,res) => {
    const allPublications = await publicationService.getAll().lean();
    const pubResult = allPublications.map(x => ({...x, shareCount: x.usersShared.length}))
    res.render('home', {title: 'Home Page', pubResult})
});

router.get('/profile', isAuth, async (req,res) => {
    const user = await userService.withId(req.user._id).populate('myPublications').populate('shares').lean();

    const publicationTitles = user.myPublications.map(x => x.title).join(', ');
    const sharedTitles = user.shares.map(x => x.title).join(', ');
    res.render('home/profile', {title:"Profile page", ...user, publicationTitles, sharedTitles})
});


module.exports = router;