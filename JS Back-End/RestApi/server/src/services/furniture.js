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

async function getById(id) {
    return Item.findById(id);
}

async function updateById(id, item) {
    const existing = await Item.findById(id);

    if (existing) {
        existing.make = item.make;
        existing.model = item.model;
        existing.year = item.year;
        existing.description = item.description;
        existing.price = item.price;
        existing.img = item.img;
        existing.material = item.material
    } else {
        const error = new Error('Not Found')
        error._notFound = true;
        throw error;
    }

    await existing.save();
    return existing;
}

module.exports = {
    getAll,
    create,
    getById,
    updateById
}