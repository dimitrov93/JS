const router = require('express').Router();
const postService = require('../services/posts');

router.get('/', (req,res) => {
    res.render('home')
});

router.get('/myPosts', async (req,res) => {
    const post = await postService.FindByUser(req.user._id).lean();
    console.log(post);
    res.render('home/myPosts', {post})
});

module.exports = router;