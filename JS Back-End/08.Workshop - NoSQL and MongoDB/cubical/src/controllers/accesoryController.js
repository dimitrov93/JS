const router = require('express').Router();
const accessoryService = require('../services/accessoryService')
const Accessory = require('../models/Accessory');
const { modelValidator } = require('../middleware/modelValidatorMiddleware')

router.get('/create', (req,res) => {
    res.render('accessory/create')
});

router.post('/create', modelValidator(Accessory), async (req,res) => {
    await accessoryService.create(req.body)
    res.redirect('/');
});

module.exports = router;