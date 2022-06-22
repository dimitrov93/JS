const router = require('express').Router();
const { isAuth } = require('../middlewares/auth');
const {getErrorMsg} = require('../utils/errorHelpers');
const postService = require('../services/posts');
const userService = require('../services/user')

router.get('/create', isAuth, (req,res) => {
    res.render('posts/create')
});

router.post('/create', isAuth, async (req,res) => {
    const postsData = {...req.body, author: req.user._id};
    try {
        await postService.create(postsData);
        res.redirect('/')
    } catch (error) {
        console.log(error);
        res.render('posts/create', {...req.body, error: getErrorMsg(error)})
    }
});

router.get('/all',  async (req,res) => {
    const allPosts = await postService.getAll().lean();
    res.render('posts/all', {allPosts})
});

router.get('/:postId/details',  async (req,res) => {
    const currentPost = await postService.getOne(req.params.postId).lean();
    const isOwner = currentPost.author._id == req.user?._id;
    const isLoggedUser = req.user?._id
    const findUser = await userService.FindById(currentPost.author).lean();
    const userName = findUser.firstName;

    let isLiked = false;
    if (currentPost.votes.some(x => x._id == req.user._id)) {
        isLiked = true;
    }

    let votesCounter = 0;

    if (currentPost.votes.length > 0) {
        currentPost.votes.forEach(x => {
            votesCounter += 1;
        });
    }
    res.render('posts/details', {...currentPost, userName, isOwner, isLoggedUser, isLiked, votesCounter})
});

router.get('/:postId/upVote',  async (req,res) => {
    const currentPost = await postService.getOne(req.params.postId);
    const findUser = await userService.FindById(req.user?._id);
    currentPost.votes.push(findUser)
    currentPost.rating += 1;
    currentPost.save();
    console.log(currentPost);
    res.redirect('/')
});

module.exports = router;