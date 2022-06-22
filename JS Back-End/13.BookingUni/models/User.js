const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {SALT_ROUNDS} = require('../config/env');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
    },
    booked: [{
        type: mongoose.Types.ObjectId,
        ref: 'Hotel',
    }],
    offered: [{
        type: mongoose.Types.ObjectId,
        ref: 'Hotel',
    }],
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