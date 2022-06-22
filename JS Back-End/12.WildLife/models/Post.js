const mongoose = require('mongoose');
const {isEmail, isUrl} = require('validator');
const bcrypt = require('bcrypt');
const {SALT_ROUNDS} = require('../config/env');
const URL_PATTERN = /^https?:\/\/(.+)/;


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 6,
    },
    keyword: {
        type: String,
        required: true,
        minLength: 6,
    },
    location: {
        type: String,
        required: true,
        maxLength: 15,
    },
    date: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10,
    },
    image: {
        type: String,
        required: true,
        // validate: /^(http|https):/g,
        validate: {
            validator(value) {
                return URL_PATTERN.test(value)
            },
            message: 'House image url must be valid!'
        }
    },
    description: {
        type: String,
        required: true,
        minLength: 8,
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    votes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    rating: {
        type: Number,
        default: 0,
    }

});

// postSchema.path('image').validate(function() {
//     return this.image.startsWith('http');
// }, 'Image url should be a link');

const Post = mongoose.model('Post', postSchema);
module.exports = Post;