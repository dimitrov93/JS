const Hotel = require('../models/Hotel');

exports.create = (data) => Hotel.create(data)
exports.getAll = () => Hotel.find();
exports.getOne = (dataId) => Hotel.findById(dataId);
exports.delete = (dataId) => Hotel.deleteOne({_id: dataId})
exports.update = (dataId, data) => Hotel.updateOne({_id: dataId}, {$set: data}, {runValidators: true});
exports.FindByUser = (userId) => Hotel.find({bookedRoomsByUser: userId})