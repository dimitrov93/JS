const express = require('express');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');

const movieController = require('./controllers/movieController');

const app = express();
const url = 'mongodb://localhost:27017/movieCollection';

mongoose.connect(url)
    .then(() => {
        console.log('DB Connected');
    })
    .catch((err) => {
        console.log('DB ERror: ', err);
    })

app.use(express.urlencoded({extended: false}));
app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/movies', movieController);

app.listen(5000, () => console.log('Server is listening on port 5000...'));
