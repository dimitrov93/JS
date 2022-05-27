const router = require('express').Router();
const fs = require('fs/promises');
const cubes = require('../db.json');
const path = require('path');


router.get('/create', (req,res) => {
    res.render('create')
});

router.post('/create', (req,res) => {
    const cube = req.body;
    // validate
    if (cube.name.length < 2) {
        return res.status(400).send('Invalid request');
    }
    // save data
    cubes.push(cube);
    fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, '', 4), {encoding:"utf-8"})
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            res.status(400).send(err)
        });
    // redirect to page
});

module.exports = router