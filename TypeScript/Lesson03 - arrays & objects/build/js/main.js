"use strict";
let stringArr = ['one', 'hey', 'ceko'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1231, true];
stringArr[0] = '42';
stringArr.push('as');
guitars[0] = 1941;
guitars.unshift('true');
guitars = stringArr;
let test = [];
let bands = [];
// Tuple
let myTuple = ['ceko', 42, true];
let mixed = ['ceko', 1, true];
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Ceko',
    prop2: true
};
exampleObj.prop2 = false;
let evh = {
    name: 'Ceko',
    active: false,
    albums: [1292, 5110, 'ASD']
};
let jp = {
    name: "jim",
    active: true,
    albums: [1292, 5110, 'ASD']
};
const greetGuitarist = (guitars) => {
    var _a;
    if (guitars.name) {
        return `Hello ${(_a = guitars.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
