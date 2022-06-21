const mongoose = require('mongoose');

const housingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 6,
    },
    type: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
        min: 1850,
        max: 2021
    },
    city: {
        type: String,
        required: true,
        minLength: 4,
    },
    homeImage: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 60,
    },
    availablePieces: {
        type: Number,
        required: true,
        min: 0,
        max: 10,
    },
    rentedAHome: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

housingSchema.path('homeImage').validate(function() {
    return this.homeImage.startsWith('http');
}, 'Image url should be a link');

const Housing = mongoose.model('Housing', housingSchema);
module.exports = Housing;