function sumDigits(n) {
    let stringDigit = n.toString();
    let sum = 0;
    for (let i = 0; i < stringDigit.length; i++) {
        sum += Number(stringDigit[i]);
    }
    console.log(sum);
}

sumDigits(245678)
sumDigits(97561)
sumDigits(543)