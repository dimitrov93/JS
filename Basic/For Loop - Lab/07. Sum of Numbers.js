function sumsOfNumber(input) {
    let word = input[0];
    let charsWord = word.length;
    let sum = 0;

    for (let i = 0; i < charsWord; i++) {
        sum = sum + Number(word[i])
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumsOfNumber(["1234"])