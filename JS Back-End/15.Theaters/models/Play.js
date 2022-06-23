const mongoose = require('mongoose');

const playSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    },
    image: {
        type: String,
        required: true,
    },
    isPublic: {
        type: Boolean,
        default: false,
    },
    userLikes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Play = mongoose.model('Play', playSchema);

module.exports = Play;