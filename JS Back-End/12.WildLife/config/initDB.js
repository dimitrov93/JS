const mongoose = require('mongoose');
const {DB_QUERY_STRING} = require('./env');

exports.startDB = () => {
    mongoose.connect(DB_QUERY_STRING);
    return mongoose.connection.on('open', () => console.log('Database is connected!'))
}