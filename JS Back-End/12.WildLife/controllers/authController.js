const router = require('express').Router();


 // --------------- REGISTER  ---------------  //
 router.get('/register', (req,res) => {
    res.render('auth/register')
});

router.post('/register', (req,res) => {
    const {firstName, lastName, email, password, rePassword} = req.body;

    if (password !== rePassword) {
        return res.render('auth/register', {error: 'Password mismatch!'})
    }

    res.render('auth/register')
});

module.exports = router