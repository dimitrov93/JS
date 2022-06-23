const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const {SALT_ROUNDS} = require('../config/env');
const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;

const userSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true, 
        validate: {validator(value) {return EMAIL_PATTERN.test(value)},message: 'Email must be valid'}
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: [true, 'Gender is required!'],
    },
    tripHistory: [{
        type: mongoose.Types.ObjectId,
        ref: 'Trip',
    }]
});

userSchema.pre('save', function(next) {
    bcrypt.hash(this.password,SALT_ROUNDS)
    .then((hashedPassword => {
        this.password = hashedPassword;
        next();
    }))
})

const User = mongoose.model('User', userSchema);

module.exports = User;