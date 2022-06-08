const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', function(req, res) {
    res.setHeader('Set-Cookie', 'test=some')

    // res.cookie('Test Cookie1', 'Coookies1')
    // res.cookie('Test Cookie2', 'Coookies2')
    res.send('Hello');
});

app.get('/cats', (req,res) => {
    console.log(req.cookies);
    res.send('Cats FTW')
});

app.listen(5000, () => console.log("Server is running on 5000"))