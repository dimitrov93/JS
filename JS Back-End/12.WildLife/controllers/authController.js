const router = require('express').Router();


 // --------------- REGISTER  ---------------  //
 router.get('/register', (req,res) => {
    res.render('auth/register')
});

module.exports = router