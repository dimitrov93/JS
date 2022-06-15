const router = require('express').Router();
const authService = require('../services/authService');
const {sessionName} = require('../config/constants')
const validator = require('validator');

router.get('/register', (req,res) => {
    res.render('auth/register')
});

router.post('/register', async (req,res) => {

    if (!validator.isEmail(req.body.username)) {
        res.status(401).send('Invalid email')
    }

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

    res.cookie(sessionName, token, {httpOnly: true});
    
    res.redirect('/')
});

router.get('/logout', (req,res) => {
    res.clearCookie(sessionName);
    res.redirect('/')
})

module.exports = router;