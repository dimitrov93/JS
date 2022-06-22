const Hotel = require('../models/Hotel');

exports.create = (data) => Hotel.create(data)
exports.getAll = () => Hotel.find();
exports.getOne = (dataId) => Hotel.findById(dataId);
// exports.delete = (postId) => Post.deleteOne({_id: postId})
// exports.update = (postId, postData) => Post.updateOne({_id: postId}, {$set: postData}, {runValidators: true});
// exports.FindByUser = (userId) => Post.find({author: userId}).populate('author', 'firstName lastName');