const router = require('express').Router();

router.get('/create', (req,res) => {
    res.render('trips/create')
});

router.get('/details', (req,res) => {
    res.render('trips/details')
});

router.get('/shared', (req,res) => {
    res.render('trips/shared')
});


module.exports = router;