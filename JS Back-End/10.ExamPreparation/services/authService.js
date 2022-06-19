const User = require('../models/User');

exports.create = (userData) => User.create(userData);