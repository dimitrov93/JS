const api = require('../services/furniture');

const router = require('express').Router();

router.get('/', async (req,res) => {
    res.json(await api.getAll())
});

router.post('/', async (req,res) => {
    const item = {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img,
        material: req.body.material
    };

    try {
        const result = await api.create(item)
        res.json(result);
    } catch (error) {
        res.status(400).json({message: 'Request Error'})
    }

});

router.get('/:id', async (req,res) => {
    const id = req.params.id;
    const item = await api.getById(id);
    if (item) {
        res.json(item)
    } else {
        res.status(404).json({message: `Item ${id} not found`})
    }
});

router.put('/:id', async (req,res) => {
    const id = req.params.id;
    
    const item = {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img,
        material: req.body.material
    };

    try {
        const result = await api.updateById(id, item)
        res.json(result);
    } catch (err) {
        if (err._notFound) {
            res.status(404).json({message: `Item ${id} not found`})
        } else {
            console.log(err);
            res.status(400).json({message: 'Request Error'})
        }
    }
});

module.exports = router