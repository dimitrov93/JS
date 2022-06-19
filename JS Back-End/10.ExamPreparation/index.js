const express = require('express');
const hbs = require('express-handlebars');
const {PORT} = require("./config/env");
const routes = require('./router');
const {dbInit} = require('./config/initDB')
const cookieParser = require('cookie-parser');
const {auth} = require('./middlewares/authMiddleware');

const app = express();

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(cookieParser());
app.use(auth)
app.use(routes);


dbInit();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))