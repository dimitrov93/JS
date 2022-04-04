function solve(input) {
    let regEx = /\w+/gm;
    let match;
    let empty = [];
    let validmatch

    while ((validmatch = regEx.exec(input)) !== null) {
        empty.push(validmatch[0])
    }
    
    if (empty.length > 0) {
        console.log(empty.join(", ").toUpperCase());
    }
}

solve('Hi, how are you?')