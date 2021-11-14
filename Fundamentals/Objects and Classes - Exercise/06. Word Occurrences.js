function solve(arr) {
//    let words = new Map();
//
//    for (let word of arr) {
//        if (words.has(word)) {
//            let currentCount = words.get(word)
//            words.set(word,currentCount +1);
//        } else {
//            counter = 1;
//            words.set(word, 1);
//        }
//    }
//
//    let sorted = Array.from(words).sort((a,b) => b[1] - a[1])
//
//    for (let line of sorted) {
//        console.log(`${line[0]} -> ${line[1]} times`);
//    }
//}

    let listOfNames = {};

    for (const word of arr) {
        if (listOfNames.hasOwnProperty(word)) {
            let currentNumber = listOfNames[word];
            listOfNames[word] = currentNumber + 1;
        } else {
            listOfNames[word] = 1;
        }
    }
    
    let sorted = Object.entries(listOfNames).sort((a,b) => b[1] - a[1]);

    for (const key of sorted) {
        console.log(`${key[0]} -> ${key[1]} times`);
    }
}

solve(
    ["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]
)