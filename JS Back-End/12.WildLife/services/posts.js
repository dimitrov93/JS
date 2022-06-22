const Post = require('../models/Post');


exports.create = (data) => Post.create(data)
exports.getAll = () => Post.find();
exports.getOne = (postId) => Post.findById(postId);
exports.delete = (postId) => Post.deleteOne({_id: postId})
exports.update = (postId, postData) => Post.updateOne({_id: postId}, {$set: postData}, {runValidators: true});
