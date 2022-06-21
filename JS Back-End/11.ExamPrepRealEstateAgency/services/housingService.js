const Housing = require('../models/Housing');

exports.create = (data) => Housing.create(data);
exports.getAll = () => Housing.find();
exports.getOne = (houseId) => Housing.findById(houseId);
exports.delete = (houseId) => Housing.deleteOne({_id: houseId});
exports.update = async (houseId, data) => {
    const existing = await Housing.findById(houseId);
    existing.name = data.name,
    existing.type = data.type,
    existing.year = data.year,
    existing.city = data.city,
    existing.homeImage = data.homeImage,
    existing.description = data.description,
    existing.availablePieces = data.availablePieces,
    
    await existing.save()
}

exports.getHouseAndUser = (id) => Housing.findById(id).populate('rentedAHome');
exports.search = (text) => Housing.find({type: text})
// exports.search = (text) => Housing.find({type: {$regex: text, $options: 'i'}})