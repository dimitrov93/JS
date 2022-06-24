const { isAuth } = require('../middlewares/authMiddleware');
const courseService = require('../services/courseService');

const router = require('express').Router();

router.get('/', async (req,res) => {
    const searchThings = await courseService.search(req.query.text).lean();

    const allCourses = await courseService.getAll().lean();
    res.render('home', {allCourses})
});

module.exports = router;