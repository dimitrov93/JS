const mongoose = require('mongoose');
const URL_PATTERN = /^https?:\/\/(.+)/;

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        required: [true, 'Name is required'],
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
        validate: {
            validator(value) {
                return URL_PATTERN.test(value)
            },
            message: 'House image url must be valid!'
        },
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    description: {
        type: String,
        minLength: 10,
        required: [true, 'Description is required'],
    },
    payment: {
        type: String,
        enum: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
        required: [true, 'Payment method is required'],
    },
    buyCrypto: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
});


const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;