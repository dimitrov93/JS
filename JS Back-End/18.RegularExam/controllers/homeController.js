const { isAuth } = require('../middlewares/authMiddleware');
const cryptoService = require('../services/cryptoService');

const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('home')
});

router.get('/search', isAuth, async (req,res) => {
    const searchThings = await cryptoService.search(req.query.text).lean();
    const crypto = await cryptoService.getAll().lean();
    res.render('home/search', { Title: 'Search Page', searchThings, crypto})
});


module.exports = router;