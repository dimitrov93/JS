const router = require('express').Router();
const { isAuth, isGuests } = require('../middlewares/authMiddleware');
const playService = require('../services/playService');

router.get('/create', (req,res) => {
    res.render('plays/create')
});

router.post('/create', async (req,res) => {
    let {title, description, image, isPublic} = req.body;

    if (isPublic == undefined) {
        isPublic = false;
    } else {
        isPublic = true;
    }

    try {
        await playService.create({title, description, image, isPublic});
        res.redirect('/')
    } catch (error) {
        res.render('/');
        res.render('plays/create', {...req.body})
    }
});

module.exports = router;