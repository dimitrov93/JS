const mongoose = require('mongoose');
const URL_PATTERN = /^https?:\/\/(.+)/;

const publicationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minLength: 6,
    },
    paintingTech: {
        type: String,
        required: [true, 'Technique is required'],
        maxLength: 15,
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
    certificate: {
        type: String,
        enum: ['Yes', 'No'],
        required: [true, 'certificate is required'],
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    usersShared: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;