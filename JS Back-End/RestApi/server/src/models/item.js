const {model, schema, Schema} = require('mongoose');

const itemSchema = new Schema({
    make: {type: String},
    model: {type: String},
    year: {type: Number},
    description: {type: String},
    price: {type: Number},
    img: {type: String},
    material: {type: String},
});

const Item = model('Item', itemSchema);

module.exports = Item;