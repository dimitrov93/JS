function oddAndEven(number) {
    let stringNumber = number.toString();
    let sumOdd = oddSum(stringNumber);
    let sumEven = evenSum(stringNumber)

    function oddSum(stringNumber) {
        let sum = 0;
        for (let i = 0; i < stringNumber.length; i++) {
            let num = Number(stringNumber[i]);
            if (num % 2 !== 0) {
                sum += num;
            }
        }
        return sum;
    }

    function evenSum(stringNumber) {
        let sum = 0;
        for (let i = 0; i < stringNumber.length; i++) {
            let num = Number(stringNumber[i]);
            if (num % 2 === 0) {
                sum += num;
            }
        }
        return sum;
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddAndEven(1000435)
oddAndEven(3495892137259234)