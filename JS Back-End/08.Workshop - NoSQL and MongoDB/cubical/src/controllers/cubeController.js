const router = require('express').Router();

const cubeService = require('../services/cubeServices')
const accessoryService = require('../services/accessoryService');
const { isAuth } = require('../middleware/authMiddleware');

router.get('/create', isAuth, (req,res) => {
    res.render('create')
});

router.post('/create', isAuth,  async (req,res) => {
    const cube = req.body;
    cube.owner = req.user._id

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
    const cube = await cubeService.getOneDetailed(req.params.id).lean();
    res.render('details', {cube})
});

router.get('/:cubeId/attach', async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId);
    const accessories = await accessoryService.getAllAvailable(cube.accessories).lean();

    res.render('accessory/attach', {cube, accessories})
});

router.post('/:cubeId/attach', async (req, res) => {
    const accessoryId = req.body.accessory;

    await cubeService.attachAccessory(req.params.cubeId, accessoryId);

    res.redirect(`/cube/details/${req.params.cubeId}`)
});


router.get('/:cubeId/edit', isAuth, async (req,res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();

    if (cube.owner != req.user._id) {
       return res.redirect('/404')
    }

    cube[`difficultyLevel${cube.difficultyLevel}`] = true;
    if (!cube) {
        return res.redirect('/404')
    };

    res.render('cube/edit', {cube})
});

router.post('/:cubeId/edit', isAuth, async (req,res) => {
    let modifiedCube = await cubeService.edit(req.params.cubeId, req.body);

    res.redirect(`/cube/details/${modifiedCube._id}`)
});

module.exports = router