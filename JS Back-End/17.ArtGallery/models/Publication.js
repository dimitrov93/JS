const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    paintingTech: {
        type: String,
        required: [true, 'Technique is required'],
    },
    image: {
        type: String,
        required: [true, 'Image is required'],

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