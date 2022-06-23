const User = require('../models/User');

exports.userById = (userId) => User.findById(userId);