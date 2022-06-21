const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const { preloadPublication, isPublicationAuthor } = require('../middlewares/publicationMiddleware');
const publicationService = require('../services/publicationService');
const {getErrorMsg} = require('../utils/errorHelpers')
const {addPublication} = require('../services/userService')

router.get('/', async (req,res) => {
    const publications = await publicationService.getAll().lean();

    res.render('publication', { publications})
});

router.get('/:publicationId/details',  async (req,res) => {
    const publication = await publicationService.getOneDetailed(req.params.publicationId).lean();
    const isAuthor = publication.author._id == req.user?._id
    const isShared = publication.usersShared.includes(req.user._id)
    res.render('publication/details', { ...publication, isAuthor, isShared });
});


router.get('/:publicationId/edit', isAuth, preloadPublication, isPublicationAuthor, async (req,res) => {
        res.render('publication/edit', { ...req.publication});
});


router.post('/:publicationId/edit', isAuth, preloadPublication, isPublicationAuthor, 
    async (req,res) => {

    try {
        await publicationService.update(req.params.publicationId, req.body);
        res.redirect(`/publication/${req.params.publicationId}/details`)
    } catch (error) {
        console.log(error);
        res.render(`publication/edit`, {...req.body, error: getErrorMsg(error)});
    }
});

router.get('/:publicationId/delete', isAuth, preloadPublication, isPublicationAuthor, async (req,res) => {
        await publicationService.delete(req.params.publicationId)
        res.redirect('/publication')
});


router.get('/create', isAuth, preloadPublication, (req,res) => {
    res.render('publication/create')
});

router.post('/create', isAuth, async (req,res) => {
    const pubData = {...req.body, author: req.user._id};

    try {
        const publication = await publicationService.create(pubData);
        await userService.addPublication(req.user._id, publication._id);
        res.redirect('/publication')
    } catch (error) {
        res.render('publication/create', {...req.body, error: getErrorMsg(error)})
    }

});

router.get('/:publicationId/share', isAuth, async (req,res) => {
   const publication = await publicationService.getOne(req.params.publicationId);

   publication.usersShared.push(req.user._id);
   await publication.save()

   res.redirect('/')
});

module.exports = router;
