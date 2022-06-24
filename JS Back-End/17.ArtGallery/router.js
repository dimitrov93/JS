const router = require('express').Router();
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const publicationController = require('./controllers/publicationController');

router.use(homeController);
router.use('/auth', authController);
router.use('/publications', publicationController);

module.exports = router;