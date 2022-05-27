const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController.js')

router.get('/', homeController.index);
router.get('/about', homeController.about);
router.use('/cube', cubeController);

module.exports = router;
// module.exports = (app) => {
//     app.get('/', homeController.index)
// }