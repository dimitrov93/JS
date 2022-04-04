function solve(input) {
    let regEx = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    let matches = [];
    let validMatches;

    while ((validMatches = regEx.exec(input)) !== null) {
        matches.push(validMatches[0])
    }

    console.log(matches.join(", "));
}

solve("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")