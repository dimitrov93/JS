const { isAuth } = require('../middlewares/authMiddleware');
const router = require('express').Router();
const publicationService = require('../services/publicationService');
const { getErrorMsg } = require('../utils/errorHelpers');

router.get('/gallery', async (req,res) => {
    const galleries = await publicationService.getAll().lean();
    res.render('publications/gallery', {title: 'Gallery Page', galleries})
});

router.get('/create', isAuth, (req,res) => {
    res.render('publications/create', {title: 'Create Page'})
});


router.post('/create', isAuth, async (req,res) => {
    const data = {...req.body, author: req.user._id};

    try {
        await publicationService.create(data);
        res.redirect('/publications/gallery')
    } catch (error) {
        res.render('publications/create', {...req.body, error: getErrorMsg(error)})
    }
});

router.get('/:postId/details',  async (req,res) => {
    const currentPost = await publicationService.getOneDetailed(req.params.postId).lean();
    const isOwner = currentPost.author._id == req.user?._id;
    let shared = false;
    if (currentPost.usersShared.some(x => x._id == req.user._id)) {
        shared = true
    }
    res.render('publications/details', {...currentPost, isOwner, shared})
});

router.get('/:postId/delete',  async (req,res) => {
    await publicationService.delete(req.params.postId);
    res.redirect('/publications/gallery')
});

router.get('/:postId/edit',  async (req,res) => {
    const currentPost = await publicationService.getOne(req.params.postId).lean();
    res.render('publications/edit', {...currentPost})
});

router.post('/:postId/edit',  async (req,res) => {
    try {
        await publicationService.update(req.params.postId, {...req.body});
        res.redirect(`/publications/${req.params.postId}/details`)
    } catch (error) {
        res.render(`/publications/${req.params.postId}/edit`, {...req.body, error: getErrorMsg(error)})
    }
});

router.get('/:postId/share',  async (req,res) => {
    const currentPost = await publicationService.getOne(req.params.postId);
    currentPost.usersShared.push(req.user._id)
    await currentPost.save();
    res.redirect(`/`)
});


module.exports = router;