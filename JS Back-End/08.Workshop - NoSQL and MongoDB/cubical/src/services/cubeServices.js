const fs = require('fs/promises');
const { default: mongoose } = require('mongoose');
const path = require('path');
const Accessory = require('../models/Accessory');


const Cube = require('../models/Cube')

exports.getOne = (cubeId) => Cube.findById(cubeId).lean();
exports.getOneDetailed = (cubeId) => Cube.findById(cubeId).lean().populate('accessories');

exports.getAll = async (search = '', fromInput, toInput) => {
    const from = Number(fromInput) || 0;
    const to = Number(toInput) || 6;
    
    let cubes = await Cube.find({name: {$regex: new RegExp(search, 'i')}})
    .where('difficultyLevel').lte(to).gte(from)
    .lean();
    // const result = cubes
    // .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    // .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to)
    return cubes;
};

exports.create = (cube) =>  Cube.create(cube);

exports.edit = (cubeId, cubeData) => {
    return Cube.findByIdAndUpdate(cubeId, cubeData);
}

exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId);

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
