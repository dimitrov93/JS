const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET =  'adsfasf3423adsfqaew4f34t';

async function register(email, password) {
    // check if email is taken
    const existing = await User.findOne({email: new RegExp(`^${email}$`, 'i')});
    if (existing) {
        throw new Error('Email is taken')
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // store user
    const user = new User({
        email,
        hashedPassword
    });

    await user.save();

    return createSession(user);

}

async function login(email, password) {
    const user = await User.findOne({email: new RegExp(`^${email}$`, 'i')});
    if (!user) {
        throw new Error('Incorrect email or password')
    }

    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!match) {
        throw new Error('Incorrect email or password')
    }
    return createSession(user);

}

function createSession(user) {
    const payload = {
        email: user.email,
        _id: user._id
    };

    const accessToken = jwt.sign(payload, JWT_SECRET)

    return {
        email: user.email,
        accessToken,
        _id: user._id
    };
}


module.exports = {
    register,
    login
};