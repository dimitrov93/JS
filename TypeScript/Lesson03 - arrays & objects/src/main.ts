let stringArr = ['one', 'hey', 'ceko'];

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1231, true]

stringArr[0] = '42'
stringArr.push('as')

guitars[0] = 1941
guitars.unshift('true')

guitars = stringArr

let test = [];
let bands : string[] = []

// Tuple
let myTuple: [string,number, boolean] = ['ceko', 42, true]

let mixed = ['ceko', 1, true]

// Objects
let myObj: object
myObj = []
console.log(typeof myObj);
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Ceko',
    prop2: true
}

exampleObj.prop2 = false

interface Guitarist {
    name?: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Ceko',
    active: false,
    albums: [1292, 5110, 'ASD']
}

let jp: Guitarist = {
    name: "jim",
    active: true,
    albums: [1292, 5110, 'ASD']
}

const greetGuitarist = (guitars: Guitarist) => {
    if (guitars.name) {
        return `Hello ${guitars.name?.toUpperCase()}!`
    }
    return 'Hello!'
}

console.log(greetGuitarist(jp));
