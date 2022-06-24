const router = require('express').Router();
const { isAuth, isGuests } = require('../middlewares/authMiddleware');
const playService = require('../services/playService');
const userService = require('../services/userService');

router.get('/create', (req,res) => {
    res.render('plays/create')
});

router.post('/create', async (req,res) => {
    const createData = {...req.body, author: req.user._id};


    if (req.body.isPublic == undefined) {
        req.body.isPublic = false;
    } else {
        req.body.isPublic = true;
    }

    try {
        await playService.create(createData);
        res.redirect('/')
    } catch (error) {
        res.render('plays/create', {...req.body})
    }
});

router.get('/:playId/details',  async (req,res) => {
    const currentPlay = await playService.getOne(req.params.playId).lean();
    const isOwner = currentPlay.author._id == req.user?._id;
    const isLoggedUser = req.user?._id
    const hasLiked = await playService.FindByUser(req.user._id);
    let isLiked = false;
    hasLiked.some(x => {
        if (x._id == req.params.playId) {
            isLiked = true
        }
    })

    // let isLiked = false;
    // if (currentPlay.votes.some(x => x._id == req.user._id)) {
    //     isLiked = true;
    // }

    // let votesCounter = 0;

    // if (currentPost.votes.length > 0) {
    //     currentPost.votes.forEach(x => {
    //         votesCounter += 1;
    //     });
    // }
    res.render('plays/details', {...currentPlay, isOwner, isLoggedUser, isLiked})
});

router.get('/:playId/delete',  async (req,res) => {
    await playService.delete(req.params.playId);
    res.redirect('/')
});

router.get('/:playId/edit',  async (req,res) => {
    const currentPost = await playService.getOne(req.params.playId).lean();
    res.render('plays/edit', {...currentPost})
});

router.post('/:playId/edit',  async (req,res) => {
    try {
        await playService.update(req.params.playId, {...req.body});
        res.redirect(`/plays/${req.params.playId}/details`)
    } catch (error) {
        res.render(`/plays/${req.params.playId}/edit`, {...req.body})
    }
});

router.get('/:playId/like',  async (req,res) => {
    const currentPost = await playService.getOne(req.params.playId);
    const findUser = await userService.FindUserByID(req.user?._id);
    currentPost.userLikes.push(findUser);
    currentPost.save();

    res.redirect('/')
});




module.exports = router;