const {COOKIE_SESSION_NAME} = require('../constants')
const {SECRET} = require('../config/env')
const jwt = require('jsonwebtoken');

exports.auth = (req,res, next) => {
    const token = req.cookies[COOKIE_SESSION_NAME];
    if (token) {
        jwt.verify(token, SECRET, ((err, decodedToken) => {
            if (err) {
                res.clearCookie(COOKIE_SESSION_NAME)
                // return next(err);
                res.redirect('/login');
            }

            req.user = decodedToken;

            res.locals.user = decodedToken;

            next();
        }));
    } else {
        next();
    }
};

exports.isAuth = (req,res,next) => {

    if (!req.user) {
        return res.redirect('/auth/login')
    }
    next()
}

exports.isGuests = (req,res,next) => {
    if (req.user) {
        return res.redirect('/')
    }
    next()
}