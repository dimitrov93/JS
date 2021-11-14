function solve(arr) {
    let obj = {};

    for (let line of arr) {
        let [direction, carNumber] = line.split(", ");

        if (direction === "IN") {
            obj[carNumber] = direction
        } 

        if (direction === "OUT") {
            delete obj[carNumber];
        }
    }

    let entries = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]));

    for (let each of entries) {
        console.log(each[0]);
    }

}

solve(
    ['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)