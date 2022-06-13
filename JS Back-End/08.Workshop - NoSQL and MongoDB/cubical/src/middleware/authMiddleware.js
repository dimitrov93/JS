const jwt = require('jsonwebtoken')
const {sessionName, secret} = require('../config/constants')

exports.auth = (req,res,next) => {

    let token = req.cookies[sessionName]
    if (token) {
        console.log(token, secret);
    }
    next()
};