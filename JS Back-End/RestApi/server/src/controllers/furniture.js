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

module.exports = router