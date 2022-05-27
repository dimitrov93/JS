const cubes = require('../db.json')
const router = require('express').Router();


router.get('/', (req,res)  => {
    res.render('index', {cubes});
});

router.get('/about', (req,res)  => {
    res.render('about');
});

module.exports = router