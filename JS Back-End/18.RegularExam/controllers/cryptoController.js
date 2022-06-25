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

router.get('/catalog', isAuth, async (req,res) => {
    const crypto = await cryptoService.getAll().lean();
    res.render('crypto/catalog', {title: 'Catalog Page', crypto})
});

router.get('/:cryptoId/details',  async (req,res) => {
    const currentCrypto = await cryptoService.getOneDetailed(req.params.cryptoId).lean();
    const isOwner = currentCrypto.owner._id == req.user?._id;
    // const isShared = await currentCrypto.usersShared.some(x => x._id == req.user._id);
    
    res.render('crypto/details', {...currentCrypto, isOwner})
});

module.exports = router;