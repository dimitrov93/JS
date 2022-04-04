function solve(input) {

    let n = input.shift();
    input.pop();
    let obj = {};

    while (n>0) {
        let [piece,composer,key] = input.shift().split("|");
        
        if (!obj.hasOwnProperty(piece)) {
            obj[piece] = {
                composer: composer,
                key: key
            }
        }
        n--
    }
    
    for (let line of input) {
        let currentline = line.split("|");
        if (currentline[0] === "Add") {
            let piece = currentline[1];
            let composer = currentline[2];
            let key = currentline[3];

            if (!obj.hasOwnProperty(piece)) {
                obj[piece] = {
                    composer: composer,
                    key: key
                }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        }  else if (currentline[0] === "Remove") {
            let piece = currentline[1];

            if (!obj.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                delete obj[piece];
                console.log(`Successfully removed ${piece}!`);
            }
        }  else if (currentline[0] === "ChangeKey") {
            let piece = currentline[1];
            let newKey = currentline[2];

            if (!obj.hasOwnProperty(piece)) {
            
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                obj[piece].key = newKey
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }
        }
    }

    let sorted = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]));

    for (let word of sorted) {
        console.log(`${word[0]} -> Composer: ${word[1].composer}, Key: ${word[1].key}`);
    }
}

solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  
  )