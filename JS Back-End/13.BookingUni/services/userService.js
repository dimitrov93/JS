const User = require('../models/User');

exports.FindById = (userId) => User.findById(userId)
exports.UserHotels = (userId) => User.findById(userId).populate('booked', 'name')