const router = require('express').Router();

const cubeService = require('../services/cubeServices')

router.get('/create', (req,res) => {
    res.render('create')
});

router.post('/create', async (req,res) => {
    const cube = req.body;
    // validate
    if (cube.name.length < 2) {
        return res.status(400).send('Invalid request');
    }
    // save data
    try {
        await cubeService.save(cube)
        res.redirect('/')
    } catch (error) {
        res.status(400).send(error)
    }

});

router.get('/details/:id' , (req,res) => {
    const cube = cubeService.getOne(req.params.id);

    res.render('details', {cube})
});

module.exports = router