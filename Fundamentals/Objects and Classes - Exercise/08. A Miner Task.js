function solve(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i+=2) {
        let resourse = arr[i];
        let quantity = Number(arr[i+1]);
        if (!obj.hasOwnProperty(resourse)) {
            obj[resourse] = quantity;
        } else {
            obj[resourse] += quantity;
        }
    }

    let entries = Object.entries(obj);

    for (let line of entries) {
        console.log(`${line[0]} -> ${line[1]}`);
    }
}

solve(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
        ]

)