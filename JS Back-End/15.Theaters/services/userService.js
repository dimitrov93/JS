const User = require('../models/User')

exports.FindUserByID = (userId) => User.findById(userId);