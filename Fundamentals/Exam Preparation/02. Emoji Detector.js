function solve([input]) {
    let regEx = /(\:\:|\*\*)([A-Z][a-z]{2,})\1/gm;
    let regEx2 = /\d/gm
    let match = [];
    let validMatch = regEx.exec(input);
    let validMatch2 = regEx2.exec(input);

    while (validMatch !== null) {
        match.push(validMatch[0])
        validMatch = regEx.exec(input)
    }

    let threshhold = 1;
    while (validMatch2 !== null) {
        let num = Number(validMatch2[0]);
        threshhold *= num
        validMatch2 = regEx2.exec(input);
    }

    console.log(`Cool threshold: ${threshhold}`);
    console.log(`${match.length} emojis found in the text. The cool ones are:`);

    for (let emoji of match) {
        let sumEmoji = 0;
        let theWord = emoji.slice(2,-2);
        for (let i = 0; i < theWord.length; i++) {
            let ch = theWord[i].charCodeAt();
            sumEmoji += ch;
        }

        if (sumEmoji > threshhold ) {
            console.log(emoji);
        }
    }
}

solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])