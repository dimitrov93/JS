const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const courseService = require('../services/courseService');
const userService = require('../services/userService');

router.get('/create', (req,res) => {
    res.render('course/create')
});

router.post('/create', isAuth, async (req,res) => {
    const data = {...req.body, author: req.user._id};
    
    try {
        await courseService.create(data);
        res.redirect('/')
    } catch (error) {
        console.log(error);
        res.render('course/create', {...req.body})
    }
});

router.get('/:postId/details',  async (req,res) => {
    const currentPost = await courseService.getOne(req.params.postId).lean();
    const isOwner = currentPost.author._id == req.user?._id;

    const enrolled = await courseService.FindOneDetailed(req.params.postId).lean();
    let hasRolled = enrolled.usersEnrolled.includes(req.user._id);
    console.log(hasRolled);
    res.render('course/details', {...currentPost, isOwner})
});

router.get('/:postId/delete',  async (req,res) => {
    await courseService.delete(req.params.postId);
    res.redirect('/')
});

router.get('/:postId/edit',  async (req,res) => {
    const currentPost = await courseService.getOne(req.params.postId).lean();
    res.render('course/edit', {...currentPost})
});

router.post('/:postId/edit',  async (req,res) => {
    
    try {
        await courseService.update(req.params.postId, {...req.body})
        res.redirect(`/course/${req.params.postId}/details`)
    } catch (error) {
        console.log(error);
        res.render(`course/${req.params.postId}/edit`, {...req.body})
    }

});

router.get('/:postId/enroll',  async (req,res) => {
    const currentPost = await courseService.getOne(req.params.postId);
    currentPost.usersEnrolled.push(req.user._id)
    await currentPost.save()
    res.redirect(`/course/${req.params.postId}/details`)
});

module.exports = router;