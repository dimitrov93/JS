const express = require('express');
const app = express();

const expressSession = require('express-session');
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // http
}));



app.get('/', function(req, res) {
    req.session.username = "Pesho" + Math.random();
    res.send('Home Page');
});

app.get('/cats', (req,res) => {
    console.log(req.session);
    res.send('Cats FTW')
});

app.listen(5000, () => console.log("Server is running on 5000"))