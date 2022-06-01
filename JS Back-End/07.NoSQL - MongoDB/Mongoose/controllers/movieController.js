const router = require('express').Router();
const { Movie } = require('../models/Movie')

router.get('/', async (req,res) => {
    const movies = await Movie.find().lean();
    console.log(movies);
    res.render('movies', { movies })
});

router.get('/create', (req,res) => {
    res.render('createMovie');
});

router.post('/create', async (req,res) => {
    // first way to create db document
    // const movie = new Movie(req.body);
    // let savedMovie = await movie.save();

    // Second way to create db document
    let savedMovie = await Movie.create(req.body);
    console.log(savedMovie);
    res.redirect('/movies')
})
module.exports = router