const router = require('express').Router();
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const playController = require('./controllers/playController');

router.use(homeController);
router.use('/auth', authController);
router.use('/plays', playController);

module.exports = router;