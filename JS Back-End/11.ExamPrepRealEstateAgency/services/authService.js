const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {SECRET} = require('../config/env')

exports.register = (userData) => User.create(userData);

exports.createToken = (user) => {
    const payload = {_id: user._id, name: user.name, username: user.username};
    const options = {expiresIn: "2d"};

    return new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET, options, (err, decodedToken) => {
            if (err) {
                return reject(err)
            }
            resolve(decodedToken)
        })
    });
}


exports.login = async (username, password) => {
    const user = await User.findOne({username});

    if (!user) {
        throw {message: 'Cannot find username or password!'}
    };

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw {message: 'Cannot find username or password!'}
    };

    return user
}