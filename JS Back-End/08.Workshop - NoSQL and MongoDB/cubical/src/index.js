const express = require('express');
const handlebars = require('express-handlebars');
const {initilizeDatabase} = require('./config/database')
const routes = require('./routes')
const app = express();

// routes(app)

// require('./routes')(app)

app.use('/static', express.static('public'));

app.use(express.urlencoded({extended: false}))

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs')
app.set('views', './src/views')

app.use(routes)

initilizeDatabase()
        .then( () => {
             app.listen(5000, () => console.log('Server listening on port 5000'))
        })
        .catch((err) => {
            console.log('Cannot connect to db:', err);
        });
        