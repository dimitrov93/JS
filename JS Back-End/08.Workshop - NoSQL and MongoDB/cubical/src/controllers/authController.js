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

router.post('/login', async (req,res) => {
    let token = await authService.login(req.body);

    console.log(token);
    if (!token) {
        res.redirect('/404')
    }
    res.redirect('/')
});

module.exports = router;