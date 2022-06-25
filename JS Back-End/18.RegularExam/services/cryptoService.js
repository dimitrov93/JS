const Crypto = require('../models/Crypto');


exports.create = (data) => Crypto.create(data)
exports.getAll = () => Crypto.find();
exports.getOne = (dataId) => Crypto.findById(dataId);
exports.getOneDetailed = (dataId) => Crypto.findById(dataId).populate('owner');
exports.delete = (dataId) => Crypto.deleteOne({_id: dataId})
exports.update = (dataId, cryptoData) => Crypto.updateOne({_id: dataId}, {$set: cryptoData}, {runValidators: true});
// exports.FindByUser = (userId) => Crypto.find({author: userId}).populate('author', 'firstName lastName');