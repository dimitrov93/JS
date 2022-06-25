const { isAuth } = require('../middlewares/authMiddleware');
const router = require('express').Router();
const cryptoService = require('../services/cryptoService');
const { getErrorMsg } = require('../utils/errorHelpers');

router.get('/create', isAuth, (req,res) => {
    res.render('crypto/create', {title: 'Create Page'})
});

router.post('/create', isAuth, async (req,res) => {
    const data = {...req.body, owner: req.user._id};

    try {
        await cryptoService.create(data);
        res.redirect('/crypto/catalog')
    } catch (error) {
        res.render('crypto/create', {...req.body, error: getErrorMsg(error)})
    }
});

router.get('/catalog', async (req,res) => {
    const crypto = await cryptoService.getAll().lean();
    res.render('crypto/catalog', {title: 'Catalog Page', crypto})
});

router.get('/:cryptoId/details',  async (req,res) => {
    const currentCrypto = await cryptoService.getOneDetailed(req.params.cryptoId).lean();
    const isLogged = req.user?._id;
    const isOwner = currentCrypto.owner._id == isLogged;
    console.log(isLogged);
    // const isShared = await currentCrypto.usersShared.some(x => x._id == req.user._id);
    res.render('crypto/details', {title:  `Detail page for ${currentCrypto.name}`, ...currentCrypto, isOwner, isLogged})
});

router.get('/:cryptoId/delete', isAuth, async (req,res) => {
    await cryptoService.delete(req.params.cryptoId);
    res.redirect('/crypto/catalog')
});

router.get('/:cryptoId/edit',  isAuth, async (req,res) => {
    const currentCrypto = await cryptoService.getOne(req.params.cryptoId).lean();
    res.render('crypto/edit', {title:  `Edit page for ${currentCrypto.name}`, ...currentCrypto})
});

router.post('/:cryptoId/edit',  isAuth, async (req,res) => {

    try {
        await cryptoService.update(req.params.cryptoId, {...req.body});
        res.redirect(`/crypto/${req.params.cryptoId}/details`)
    } catch (error) {
        res.render(`crypto/${req.params.postId}/edit`, {title: `Edit page for ${currentCrypto.name}`, ...req.body})
    }
});

module.exports = router;