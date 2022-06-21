const router = require('express').Router();
const authService = require('../services/authService')
const {COOKIE_SESSION_NAME} = require('../constants');
const { getErrorMsg } = require('../utils/errorHelpers');
const { isAuth, isGuests } = require('../middlewares/authMiddleware');

 // --------------- REGISTER  ---------------  //
router.get('/register', isGuests, (req,res) => {
    res.render('auth/register')
});

router.post('/register',  isGuests, async (req,res) => {
    const {name, username, password, rePass} = req.body;

    if (password !== rePass) {
        return res.render('auth/register', {error: 'Password mismatch!'})
    }

    try {
        const registeredUser = await authService.register({name, username, password});
        const token = await authService.createToken(registeredUser);

        res.cookie(COOKIE_SESSION_NAME, token, {httpOnly: true});
        res.redirect('/')

    } catch (error) {
        return res.render('auth/register', {error: getErrorMsg(error)})
    }
});

 // --------------- LOGIN  ---------------  //

router.get('/login',  isGuests, (req,res) => {
    res.render('auth/login')
});
+

router.post('/login', isGuests,  async (req,res) => {
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

router.get('/logout', isAuth, (req,res) => {
    res.clearCookie(COOKIE_SESSION_NAME);
    res.redirect('/')
})
module.exports = router;