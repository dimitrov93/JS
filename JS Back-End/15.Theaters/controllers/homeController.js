const { isAuth } = require('../middlewares/authMiddleware');
const playService = require('../services/playService');

const router = require('express').Router();

router.get('/', async (req,res) => {
    const allPlays = await playService.getAll().lean();
    res.render('home', {allPlays})
});


module.exports = router;