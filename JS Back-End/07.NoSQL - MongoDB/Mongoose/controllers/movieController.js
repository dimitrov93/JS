const router = require('express').Router();
const { Movie } = require('../models/Movie')

router.get('/', async (req,res) => {
    const movies = await Movie.find().lean();

    // movies.forEach(movie => {
    //     console.log(movie.getInfo());
    //     console.log(movie.isNew);
    // });

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
});

router.get('/:movieId', async (req,res) => {
    let movie = await Movie.find({_id: req.params.movieId});
    res.render('movieDetails', {movie})
});

module.exports = router