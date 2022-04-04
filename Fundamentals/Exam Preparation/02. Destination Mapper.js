function solve(input) {
    let regEx = /(=|\/)(?<name>[A-Z][A-Za-z]{2,})\1/g
    let match = regEx.exec(input)
    let empty = [];
    let sum = 0;

    while (match !== null) {
        let theName = match.groups.name;
        for (const char of theName) {
            sum++
        }
        empty.push(theName)
        match = regEx.exec(input)
    }
    console.log(`Destinations: ${empty.join(", ")}`);
    console.log(`Travel Points: ${sum}`);
}

solve("ThisIs some InvalidInput")