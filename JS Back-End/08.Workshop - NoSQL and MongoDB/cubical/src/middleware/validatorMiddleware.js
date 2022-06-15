const {isEmail} = require('../utils/validator');

exports.isEmail = (req,res,next) => {
    if (!isEmail(req.body.username)) {
        res.status(401).send('Invalid email')
    }

    next();
}