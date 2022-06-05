const fs = require('fs/promises');
const { default: mongoose } = require('mongoose');
const path = require('path');
const Accessory = require('../models/Accessory');


const Cube = require('../models/Cube')

exports.getOne = (cubeId) => Cube.findById(cubeId).lean().populate('accessories');

exports.getAll = async (search = '', fromInput, toInput) => {
    let cubes = await Cube.find().lean();
    return cubes;
};

exports.create = (cube) =>  Cube.create(cube);

exports.attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    // const cubeObjectId = mongoose.Types.ObjectId(cubeId);

    cube.accessories.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();

    return cube;
}
