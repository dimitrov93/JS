function solve(input) {
//    let obj = {};
//    for (let line of input) {
//        let currentLine = line.split(":");
//        let name = currentLine[0];
//        let address = currentLine[1];
//        obj[name] = address;
//    }
//
//    let entries = Object.entries(obj);
//    entries.sort((a,b) => {
//        keyA = a[0];
//        keyB = b[0];
//        return keyA.localeCompare(keyB)
//    })
//    
//    for (let line of entries) {
//        console.log(`${line[0]} -> ${line[1]}`);
//    }

    let store = new Map();
    for (let line of input) {
        let currentLine = line.split(":");
        let name = currentLine[0];
        let address = currentLine[1];

        if (store.has(name)) {
            let currentAddress = store.get(name);
            let newAddress = currentAddress = address;
            store.set(name,newAddress)
        } else {
            store.set(name,address)
        }
    }

    let entries = Array.from(store.entries());
        entries.sort((a,b) => a[0].localeCompare(b[0]))

    for (const line of entries) {
        console.log(`${line[0]} -> ${line[1]}`);
    }
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']


)