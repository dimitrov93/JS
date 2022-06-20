const router = require('express').Router();
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const pubController = require('./controllers/publicationController');


router.use(homeController);
router.use('/auth', authController);
router.use('/publication', pubController);

module.exports = router;