const express = require("express")
const hbs = require("express-handlebars");
const app = express();

const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

client.connect()
        .then(() => {
            console.log("DB connected successfully");
        });


const db = client.db("firstDB");
const moviesCollection = db.collection('FirstDB')


app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req,res) => {
    res.render('home')
});

app.get('/firstDB', async (req,res) => {
    let colls = await moviesCollection.find().toArray();

    res.render('collections', {colls})
});

app.listen(5000, () => console.log('Listening on 5000............'))