function specialNumber(input) {
    let n = Number(input[0]);
    let counter = 0;
    let empty = "";

    for (let i = 1111; i <= 9999; i++) {
        let currentNum = "" + i;
        for (let z = 0; z < 4; z++) {
            let currentDigit = Number(currentNum.charAt(z));
            if (n % currentDigit === 0) {
                counter++;
            }
        }
        if (counter === 4) {
            empty += currentNum + " ";
        }
        counter=0;
    }
    console.log(empty);
}

specialNumber(["16"])