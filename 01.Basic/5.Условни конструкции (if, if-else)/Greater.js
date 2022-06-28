function greaterNumber(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    if (firstNumber > secondNumber) {
        console.log(`The first number ${firstNumber} is greater`);
    } else {
        console.log(secondNumber);
    }

}

greaterNumber( ["5","3"] )