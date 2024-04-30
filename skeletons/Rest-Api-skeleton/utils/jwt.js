const jwt = require('jsonwebtoken');
const {promisify} = require('utils');

exports.verify = promisify(jwt.verify);
exports.sign = promisify(jwt.sign);
