function solve(arr) {
    let hood = arr.shift().split(", ");
    let theHood = new Map();

    for (let line of hood) {
        theHood.set(line, [])
    }

    for (let line of arr) {
        let currentLine = line.split(" - ");
        let hood = currentLine.shift();
        let person = currentLine.shift();

        if (theHood.has(hood)) {
            theHood.get(hood).push(person)
        }
    }

    let sorted = Array.from(theHood.entries());
    sorted.sort((a,b) => b[1].length - a[1].length)
    
    for (let line of sorted) {
        console.log(`${line[0]}: ${line[1].length}`);
        for (const person of line[1]) {
            console.log(`--${person}`);
        }
    }
}

solve(
    ['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']

)