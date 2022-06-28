function maxNumber(input) {
    let index = 0;
    let number = input[index];
    let sum = Number(input[0]);

    while (number !== `Stop`) {
        number = input[index];
        let guess = Number(number)
        if (guess > sum) {
            sum = guess;
        }
        index++
    }
    console.log(sum);
}

maxNumber(["-1",
"-2",
"Stop"])




