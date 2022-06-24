const Play = require('../models/Play')

exports.create = (data) => Play.create(data)
exports.getAll = () => Play.find();
exports.getOne = (PlayId) => Play.findById(PlayId);
exports.delete = (PlayId) => Play.deleteOne({_id: PlayId})
exports.update = (PlayId, PlayData) => Play.updateOne({_id: PlayId}, {$set: PlayData}, {runValidators: true});
exports.FindByUser = (userId) => Play.find({userLikes: userId})

