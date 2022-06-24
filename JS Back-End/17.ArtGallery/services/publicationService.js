const Publication = require('../models/Publication');


exports.create = (data) => Publication.create(data)
exports.getAll = () => Publication.find();
exports.getOne = (PublicationId) => Publication.findById(PublicationId);
exports.delete = (PublicationId) => Publication.deleteOne({_id: PublicationId})
exports.update = (PublicationId, PublicationData) => Publication.updateOne({_id: PublicationId}, {$set: PublicationData}, {runValidators: true});
exports.FindByUser = (userId) => Publication.find({author: userId}).populate('author', 'firstName lastName');