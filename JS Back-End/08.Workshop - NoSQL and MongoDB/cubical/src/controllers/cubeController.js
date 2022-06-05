const router = require('express').Router();

const cubeService = require('../services/cubeServices')
const accessoryService = require('../services/accessoryService')

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
        await cubeService.create(cube)
        res.redirect('/')
    } catch (error) {
        res.status(400).send(error)
    }

});

router.get('/details/:id' , async (req,res) => {
    const cube = await cubeService.getOne(req.params.id).lean();

    res.render('details', {cube})
});

router.get('/:cubeId/attach', async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId);
    const accessories = await accessoryService.getAll().lean();

    res.render('accessory/attach', {cube, accessories})
});

router.post('/:cubeId/attach', async (req, res) => {
    const accessoryId = req.body.accessory;

    await cubeService.attachAccessory(req.params.cubeId, accessoryId);

    res.redirect(`/cube/details/${req.params.cubeId}`)
});



module.exports = router