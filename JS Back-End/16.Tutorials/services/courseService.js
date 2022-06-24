const Course = require('../models/Course');


exports.create = (data) => Course.create(data)
exports.getAll = () => Course.find();
exports.getOne = (courseId) => Course.findById(courseId);
exports.delete = (courseId) => Course.deleteOne({_id: courseId})
exports.update = (courseId, postData) => Course.updateOne({_id: courseId}, {$set: postData}, {runValidators: true});
exports.FindByUser = (userId) => Course.find({author: userId}).populate('author', 'firstName lastName');