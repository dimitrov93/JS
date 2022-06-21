const { isAuth } = require('../middlewares/authMiddleware');
const houseService = require('../services/housingService');

const router = require('express').Router();

router.get('/', async (req,res) => {
    const allHouses = await houseService.getAll().lean();
    const data = allHouses.splice(-3);
    res.render('home', {data})
});

module.exports = router;