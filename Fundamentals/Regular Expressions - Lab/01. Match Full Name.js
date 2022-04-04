function solve(input) {
    let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

//   let matches = input.match(regEx);
//
//   for (let word of matches) {
//       console.log(word);
//   }


    let matches = [];
    let validMatch;
    while ( (validMatch  = regEx.exec(input)) !== null) {
        matches.push(validMatch[0])
    }


    console.log(matches.join(" "));
}


solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")