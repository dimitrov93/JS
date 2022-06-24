const { isAuth } = require('../middlewares/authMiddleware');
const router = require('express').Router();
const publicationService = require('../services/publicationService');
const userService = require('../services/userService');
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
        const publication = await publicationService.create(data);
        await userService.AddPublication(req.user._id, publication._id)
        res.redirect('/publications/gallery')
    } catch (error) {
        res.render('publications/create', {...req.body, error: getErrorMsg(error)})
    }
});

router.get('/:postId/details',  async (req,res) => {
    const currentPost = await publicationService.getOneDetailed(req.params.postId).lean();
    const isOwner = currentPost.author._id == req.user?._id;
    const isShared = await currentPost.usersShared.some(x => x._id == req.user._id);

    res.render('publications/details', {...currentPost, isOwner, isShared})
});

router.get('/:postId/delete', isAuth,   async (req,res) => {
    await publicationService.delete(req.params.postId);
    res.redirect('/publications/gallery')
});

router.get('/:postId/edit',  isAuth, async (req,res) => {
    const currentPost = await publicationService.getOne(req.params.postId).lean();
    res.render('publications/edit', {...currentPost, title: 'Edit page'})
});

router.post('/:postId/edit',  isAuth, async (req,res) => {
    try {
        await publicationService.update(req.params.postId, {...req.body});
        res.redirect(`/publications/${req.params.postId}/details`)
    } catch (error) {
        res.render(`/publications/${req.params.postId}/edit`, {...req.body, error: getErrorMsg(error)})
    }
});

router.get('/:postId/share',  isAuth, async (req,res) => {
    const currentPost = await publicationService.getOne(req.params.postId);
    const user = await userService.withId(req.user._id);

    currentPost.usersShared.push(req.user._id)
    user.shares.push(currentPost);

    await currentPost.save();
    await user.save();
    
    res.redirect(`/`)
});


module.exports = router;