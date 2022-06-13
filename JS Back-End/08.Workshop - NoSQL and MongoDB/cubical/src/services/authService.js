const User = require('../models/User')
const bcrypt = require('bcrypt');
const saltRounds = 4;

exports.register = async ({username, password, repeatPassword}) => {
    // User.create(userData)
    if (password !== repeatPassword) {
        return false;
    }

    let hashedPassword = await bcrypt.hash(password, saltRounds);

    let createdUser = User.create({
        username,
        password: hashedPassword,
    });


    // let createdUser = new User({
    //     username,
    //     password: hashedPassword,
    // });

    // await createdUser.save()

    return createdUser
};