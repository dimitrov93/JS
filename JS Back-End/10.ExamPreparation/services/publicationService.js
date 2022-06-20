const Publication = require('../models/Publication');

exports.getAll = () => Publication.find();
exports.getOne = (pubId) => Publication.findById(pubId);
exports.create = (pubData) => Publication.create(pubData);
exports.getOneDetailed = (publicationId) => Publication.findById(publicationId).populate('author')
exports.update = (pubId, pubData) => Publication.updateOne({_id: pubId}, {$set: pubData});