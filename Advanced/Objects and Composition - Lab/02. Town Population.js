function solve(input) {
    let obj = {};
    while (input.length > 0) {
        let command = input.shift().split(" <-> ");
        let name = command.shift();
        let population = Number(command.shift());

        if (!obj.hasOwnProperty(name)) {
            obj[name] = population
        } else {
            obj[name] += population
        }
    }

    for (const key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}

solve(
    ['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']    
)