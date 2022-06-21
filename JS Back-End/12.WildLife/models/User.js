const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');
const {SALT_ROUNDS} = require('../config/env');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        validation: /^([a-zA-Z])+ ([a-zA-Z])+$/,
    },
    lastName: {
        type: String,
        required: true,
        minLength: 5,
        validation: /^([a-zA-Z])+ ([a-zA-Z])+$/,
    },
    email: {
        type: String,
        required: true,
        validation: [ isEmail, 'Invalid email'],
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
    },
    myPosts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Post',
    }]
});

userSchema.pre('save', function(next) {
    bcrypt.hash(this.password,SALT_ROUNDS)
    .then((hashedPassword => {
        this.password = hashedPassword;
        next();
    }))
});

const User = mongoose.model('User', userSchema);
module.exports = User;