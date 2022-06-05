const fs = require('fs/promises');
const path = require('path');
const cubes = require('../db.json');


exports.getOne = (cubeId) => cubes.find(x => x.id === Number(cubeId));

exports.getAll = (search = '', fromInput, toInput) => {
    const from = Number(fromInput) || 0;
    const to = Number(toInput) || 6;

    const results = cubes
    .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to)
    return results
};

exports.save = (cube) => {
    cubes.push({id: cubes[cubes.length - 1].id + 1, ...cube});

    let textData = JSON.stringify(cubes, '', 4);
    return fs.writeFile(path.resolve('src', 'db.json'), textData , {encoding:"utf-8"})
}