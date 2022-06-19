const router = require('express').Router();
const authService = require('../services/authService');


router.get('/login', (req,res) => {
    res.render('auth/login')
});

router.post('/login', async (req,res) => {
    const { username, password } = req.body;
    const user = await authService.login(username, password);
    const token = await authService.createToken(user);
});

router.get('/register',  (req,res) => {
    res.render('auth/register')
});

router.post('/register', async (req,res) => {
    const  {password, repeatPassword, ...userData} = req.body

    if (password !== repeatPassword) {
        return res.render('auth/register', {error: 'Password mismatch!'})
    }

    try {
        await authService.create({password, ...userData})
        res.redirect('/login')
    } catch (error) {
        // add mongoose error mapper
        return res.render('auth/register', {error: 'Password mismatch!'})
    }
    // create user


});

module.exports = router;