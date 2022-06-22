const mongoose = require('mongoose');
const URL_PATTERN = /^https?:\/\/(.+)/;


const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {validator(value) {return URL_PATTERN.test(value)}, message: 'House image url must be valid!'}
    },
    rooms: {
        type: Number,
        required: true,
        min: 1,
        max: 100,
    },
    bookedRoomsByUser: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: String,
        required: true,
    },
});

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;