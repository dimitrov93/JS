const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController.js');

router.get('/', homeController.index)
module.exports = router;
// module.exports = (app) => {
//     app.get('/', homeController.index)
// }