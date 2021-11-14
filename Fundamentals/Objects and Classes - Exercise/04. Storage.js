function solve(input) {
//    let items = {};
//    for (let line of input) {
//        let currentLine = line.split(" ");
//        let item = currentLine[0];
//        let qant = +currentLine[1];
//
//        if (items.hasOwnProperty(item)) {
//            items[item] += qant;
//        } else {
//            items[item] = qant;
//        }
//    }
//
//    for (let key in items) {
//        console.log(`${key} -> ${items[key]}`);
//    }

    let storage = new Map();

    for (let line of input) {
        let currentLine = line.split(" ");
        let item = currentLine[0];
        let quant = +currentLine[1];

        if (storage.has(item)) {
            let currentItem = storage.get(item);
            let newQuant = currentItem += quant
            storage.set(item,newQuant)
        } else {
            storage.set(item,quant)
        }
    }

    for (let line of storage) {
        console.log(`${line[0]} -> ${line[1]}`);
    }

}

solve(
    ['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
)