const Item = require("../models/item");

async function getAll() {
    return Item.find({})
}

async function create(item) {
    const result = new Item({
        make: item.make,
        model: item.model,
        year: item.year,
        description: item.description,
        price: item.price,
        img: item.img,
        material: item.material
    });

    await result.save();
    return result;
}

module.exports = {
    getAll,
    create
}