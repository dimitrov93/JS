const router = require('express').Router();
const { isAuth, isGuests } = require('../middlewares/authMiddleware');


router.get('/create', (req,res) => {
    res.render('plays/create')
});

module.exports = router;