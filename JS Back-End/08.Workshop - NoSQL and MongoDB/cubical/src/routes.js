const express = require('express');

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController.js')
const accessoryController = require('./controllers/accesoryController')

const router = express.Router();

router.use('/', homeController);
router.use('/cube', cubeController);
router.use('/accessory', accessoryController)

module.exports = router;
// module.exports = (app) => {
//     app.get('/', homeController.index)
// }


module.exports = router