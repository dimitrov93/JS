const { isAuth } = require('../middlewares/authMiddleware');
const houseService = require('../services/housingService');

const router = require('express').Router();

router.get('/', async (req,res) => {
    const allHouses = await houseService.getAll().lean();
    const data = allHouses.splice(-3);
    res.render('home', {data})
});

router.get('/search', async (req,res) => {
    console.log(req.query.text);
    let housings = await houseService.search(req.query.text).lean();
    res.render('home/search', {title: 'Search Housing', housings})
})

module.exports = router;