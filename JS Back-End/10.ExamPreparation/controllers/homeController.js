const router = require('express').Router();
const Publication = require('../models/Publication');
const publicationService = require('../services/publicationService')
const userService = require('../services/userService')

router.get('/', async (req,res) => {
    const publications = await (await publicationService
    .getAll()
    .lean())
    .map(x => ({...x, shareCount: x.usersShared.length}));

    res.render('home', {publications})
});

router.get('/profile', async (req,res) => {
    const user = await userService.getOne(req.user._id).populate('publications').lean();
    console.log(user);
    // const publicationTitles = user.publications.map(x => x.title).join(', ')
    res.render('home/profile', {...user})
});

module.exports = router;