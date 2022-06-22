const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('home')
});

router.get('/myPosts', (req,res) => {
    
    res.render('home/myPosts')
});

module.exports = router;