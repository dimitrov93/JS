function solve(arr) {
    let obj = {};
    for (let line of arr) {
        [companyName,employeeID] = line.split(" -> ")
        
        if (!obj.hasOwnProperty(companyName)) {
            obj[companyName] = [];
        }

        if (!obj[companyName].includes(employeeID)) {
            obj[companyName].push(employeeID);
        }
    }

    let sort = Object.entries(obj);
    sort.sort((a,b) => a[0].localeCompare(b[0]));

    for (let key of sort) {
        console.log(key[0]);
        let set = new Set(key[1]);
        for (let el of set) {
            console.log(`-- ${el}`);
        }
    }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
    )