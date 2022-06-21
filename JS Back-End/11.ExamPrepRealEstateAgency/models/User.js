const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {SALT_ROUNDS} = require('../config/env');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: /^([a-zA-Z])+ ([a-zA-Z])+$/,
    },
    username:  {
        type: String,
        required: true,
        minLength: 5,
    },
    password:  {
        type: String,
        required: true,
        minLength: 4,
    },
})

userSchema.pre('save', function(next) {
    bcrypt.hash(this.password,SALT_ROUNDS)
    .then((hashedPassword => {
        this.password = hashedPassword;
        next();
    }))
});

const User = mongoose.model('User', userSchema);

module.exports = User;