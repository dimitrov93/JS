const router = require('express').Router();
const authService = require('../services/authService');

router.get('/register', (req,res) => {
    res.render('auth/register')
});

router.post('/register', async (req,res) => {

    let createdUser = await authService.register(req.body)

    if (createdUser) {
        res.redirect('/auth/login')
    } else {
        // res.redirect() to 404 page
        res.redirect('404')
    }
    
    res.redirect('register')
});


router.get('/login', (req,res) => {
    res.render('auth/login')
});

router.post('/login', (req,res) => {
    console.log(req.body);
    res.end();
});

module.exports = router;