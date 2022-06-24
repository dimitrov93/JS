const User = require('../models/User');

exports.FindById = (userId) => User.findById(userId)
exports.findAll = () => User.find();