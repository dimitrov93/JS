const Trip = require('../models/Trip');

exports.create = (data) => Trip.create(data)
exports.getAll = () => Trip.find();
exports.getOne = (TripId) => Trip.findById(TripId).populate('creator');
exports.delete = (TripId) => Trip.deleteOne({_id: TripId})
exports.update = (TripId, TripData) => Trip.updateOne({_id: TripId}, {$set: TripData}, {runValidators: true});
exports.isJoined = (TripId) => Trip.findById(TripId).populate('buddies', 'email');