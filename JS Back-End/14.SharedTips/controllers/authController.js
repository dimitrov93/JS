const router = require('express').Router();
const authService = require('../services/authService');
const {COOKIE_SESSION_NAME} = require('../constants');
const { isAuth, isGuests } = require('../middlewares/authMiddleware');
const { getErrorMsg } = require('../utils/errorHelpers');


router.get('/login', isGuests, (req,res) => {
    res.render('auth/login')
});

router.post('/login', isGuests, async (req,res) => {
    const { email , password } = req.body;
    const user = await authService.login(email, password);
    const token = await authService.createToken(user);

    res.cookie(COOKIE_SESSION_NAME, token, {httpOnly: true});
    res.redirect('/')
});

router.get('/register',  isGuests, (req,res) => {
    res.render('auth/register')
});

router.post('/register', isGuests, async (req,res) => {
    const {email, password, rePassword, gender} = req.body;
    
    if (password !== rePassword) {
        return res.render('auth/register', {error: 'Password mismatch!'})
    }
    try {
        const createdUser = await authService.create({email, password, rePassword, gender});
        const token = await authService.createToken(createdUser);
        res.cookie(COOKIE_SESSION_NAME, token, {httpOnly: true})
        res.redirect('/login')
    } catch (error) {
        return res.render('auth/register', {error: getErrorMsg(error)})
    }
});

router.get('/logout', isAuth,  (req,res) => {
    res.clearCookie(COOKIE_SESSION_NAME);
    res.redirect('/')
});
module.exports = router;