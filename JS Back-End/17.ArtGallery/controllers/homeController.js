const { isAuth } = require('../middlewares/authMiddleware');
const publicationService = require('../services/publicationService');
const { getErrorMsg } = require('../utils/errorHelpers');
const router = require('express').Router();

router.get('/', async (req,res) => {
    const allPublications = await publicationService.getAll().lean();
    const pubResult = allPublications.map(x => ({...x, shareCount: x.usersShared.length}))
    res.render('home', {title: 'Home Page', pubResult})
});


module.exports = router;