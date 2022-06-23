const mongoose = require('mongoose');
const URL_PATTERN = /^https?:\/\/(.+)/;

const tripSchema = new mongoose.Schema({
    startPoint: {
        type: String, 
        required: true, 
        minLength: 4,
    },
    endPoint: {
        type: String, 
        required: true, 
        minLength: 4,
    },
    date: {
        type: String, 
        required: true, 
    },
    time: {
        type: String, 
        required: true, 
    },
    image: {
        type: String, 
        required: true, 
        validate: {
            validator(value) {
                return URL_PATTERN.test(value)
            },
            message: 'House image url must be valid!'
        },
    },
    brand: {
        type: String, 
        required: true, 
        minLength: 4,
    },
    seats: {
        type: Number, 
        required: true, 
    },
    price: {
        type: Number, 
        required: true, 
        min: 1,
        max: 50
    },
    description: {
        type: String, 
        required: true, 
        minLength: 10,
    },
    creator: {
        type: mongoose.Types.ObjectId, 
        ref: 'User' 
    },
    buddies: [{
        type: mongoose.Types.ObjectId, 
        ref: 'User' 
    }],
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;