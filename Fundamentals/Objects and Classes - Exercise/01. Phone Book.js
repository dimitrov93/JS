function solve(input) {
    
//    let phoneBook = {};
//    for (let line of input) {
//        let current = line.split(" ");
//        let name = current[0];
//        let number = current[1];
//        phoneBook[name] = number;
//    }
//
//    for (let key in phoneBook) {
//        console.log(`${key} -> ${phoneBook[key]}`);
//    }

    let phonebook = new Map();
    for (let line of input) {
        let currentLine = line.split(" ");
        let name = currentLine[0];
        let number = currentLine[1];

        if (phonebook.has(name)) {
            let currentName = phonebook.get(name);
            let currentNumber = currentName = number;
            phonebook.set(name,currentNumber)
        } else {
            phonebook.set(name,number)
        }
    }

    for (let line of phonebook) {
        console.log(`${line[0]} -> ${line[1]}`);
    }
    
}

solve(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
)