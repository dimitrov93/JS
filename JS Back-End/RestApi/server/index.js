const mongoose = require('mongoose');
const express = require('express');
const cors = require('./src/middlewares/cors');
const furnitureController = require('./src/controllers/furniture')
const usersController = require('./src/controllers/users');
const auth = require('./src/middlewares/auth');


async function start() {

    try {
        const db = await mongoose.connect('mongodb://localhost:27017/furnitureREST')

        console.log('DB Ready');
    } catch (error) {
        console.log('Error connecting to DB');
        return process.exit(1);
    }
    const app = express();
    
    app.use(express.json());
    app.use(cors())
    app.use(auth())

    app.use('/data/catalog', furnitureController)
    app.use('/users', usersController)
    app.listen(3030, () => console.log('REST service is running on port 3000'))
}

start()
