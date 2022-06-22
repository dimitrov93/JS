const router = require('express').Router();
const authService = require('../services/authService');
const {COOKIE_SESSION_NAME} = require('../constants');
const { getErrorMsg } = require('../utils/errorHelpers');
const { isAuth, isGuests } = require('../middlewares/auth');

// -------------GET -------------- //

router.get('/register', isGuests,  (req,res) => {
    res.render('auth/register')
});

router.get('/login', isGuests,   (req,res) => {
    res.render('auth/login')
});

// -------------POST -------------- //
router.post('/register',  isGuests, async (req,res) => {
    const {email, username, password, rePassword} = req.body;

    if (password !== rePassword) {
        return res.render('auth/register', {error: 'Password mismatch!!!!!!'})
    }

    try {
        const regUser = await authService.register({...req.body});
        const token = await authService.createToken(regUser);
        res.cookie(COOKIE_SESSION_NAME, token, {httpOnly: true});
        res.redirect('/')
    } catch (error) {
        return res.render('auth/register', {error: getErrorMsg(error)})
    }
});

router.post('/login',  isGuests, async (req,res) => {
    const {username, password} = req.body;

    try {
        const user = await authService.login(username, password);
        const token = await authService.createToken(user);
        res.cookie(COOKIE_SESSION_NAME, token, {httpOnly: true});
        res.redirect('/')
    } catch (error) {
        return res.render('auth/login', {error: getErrorMsg(error)})
    }

});
// -------------logout -------------- //

router.get('/logout',  isAuth, (req,res) => {
    res.clearCookie(COOKIE_SESSION_NAME);
    res.redirect('/')
 // -------------logout -------------- //

})

module.exports = router