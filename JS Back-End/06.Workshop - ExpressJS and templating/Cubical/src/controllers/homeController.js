const cubes = require('../db.json')
const router = require('express').Router();
const cubeService = require('../services/cubeServices.js')

router.get('/', (req,res)  => {
    let { search, from, to} = req.query;

    const cubes = cubeService.getAll(search, from, to);

    res.render('index', {cubes});
});

router.get('/about', (req,res)  => {
    res.render('about');
});

module.exports = router