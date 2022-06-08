const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const secret = 'mySupersecret'

const userSessions = {};

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(cookieParser());
app.use(express.urlencoded({extended: false}))
app.use('/static', express.static('public'))
app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs')

app.get('/', function(req, res) {
    let token = req.cookies['session'];

    if (token) {
        jwt.verify(token, secret, (err,decodedToken) => {
            if (err) {
                return res.status(401).send('invalid token')
            }

            res.render('home', {email: decodedToken.email || 'Guest'});

        });
    }

    res.render('home', {email:'Guest'});
});

app.get('/register', function(req, res) {
    res.render('register');
});

app.post('/register', async (req,res) => {
    const { email, password } = req.body
    if (userSessions[email]) {
        res.status(400).send('User already exists')
    }

    const hash = await bcrypt.hash(password,saltRounds);
    userSessions[email] = {
        email,
        password: hash
    }

    res.redirect('/login')
})

app.get('/login', async function(req, res) {
    res.render('login');
});

app.post('/login',  async function(req, res) {
    const {email,password} = req.body;
    const isAuthenticated = await bcrypt.compare(password, userSessions[email].password);

    if (isAuthenticated) {
        const token = jwt.sign({email}, secret, {expiresIn: '2d'});

        // res.cookie('session', token, {httpOnly:true}) 
        res.cookie('session', token)
        res.redirect('/')
    } else {
        res.status(401).send('Wrong')
    }

});

app.listen(5000, () => console.log("Server is running on 5000"))