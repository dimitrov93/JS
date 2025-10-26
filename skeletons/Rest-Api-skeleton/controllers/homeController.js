const { isAuth } = require('../middlewares/authMiddleware');

const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('home')
});

router.get('/secret', isAuth, (req,res) => {
    res.send('The chamber of secrets')
});
module.exports = router;