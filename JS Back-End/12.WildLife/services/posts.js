const Post = require('../models/Post');


exports.create = (data) => Post.create(data)
exports.getAll = () => Post.find();
exports.getOne = (postId) => Post.findById(postId);