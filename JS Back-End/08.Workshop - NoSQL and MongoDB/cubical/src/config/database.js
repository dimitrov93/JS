const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost27017/softuni-cubicle';


exports.initilizeDatabase = () => mongoose.connect(connectionString);
