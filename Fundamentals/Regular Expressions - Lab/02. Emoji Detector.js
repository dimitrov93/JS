function solve([input]) {
/*
        /(\*\*|::)([A-Z][a-z][a-z]+)\1/gm
        /(\d+)/gm
*/
    let treshhold = 1;
    let digits = input.match(/(\d)/gm).map(Number);
    for (let dig of digits) {
        treshhold *= dig; 
    }

    console.log(`Cool threshold: ${treshhold}`);

    let emojies = input.match(        /(\*\*|::)([A-Z][a-z][a-z]+)\1/gm    );
    console.log(`${emojies.length} emojis found in the text. The cool ones are:`);
    for (let word of emojies) {
        let counter = 0;
        let theWord = word.slice(2,-2)
        for (let letter of theWord) {
           counter+= letter.charCodeAt(0)
        }
        
        if (counter > treshhold) {
            console.log(word);
        }
    }
}

solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])