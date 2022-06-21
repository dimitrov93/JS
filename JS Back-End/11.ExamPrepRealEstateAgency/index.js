const express = require('express');
const hbs = require('express-handlebars');
const {PORT} = require('./config/env')
const routes = require('./router');
const {startDB} = require('./config/initDB')
const {auth} = require('./middlewares/authMiddleware');
const cookieParser = require('cookie-parser');
const {errorHandler} = require('./middlewares/errorHandlerMiddleware');


const app = express();

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(cookieParser());
app.use(auth);
app.use(routes);
app.use(errorHandler)
startDB();
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
