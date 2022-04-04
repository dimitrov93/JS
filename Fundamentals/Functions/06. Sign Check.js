function signCheck(numOne, numTwo, numThree) {
    let totalNegative = 0;

    if (isNegative(numOne)) {
        totalNegative++;
    }
    if (isNegative(numTwo)) {
        totalNegative++;
    }

    if (isNegative(numThree)) {
        totalNegative++;
    }

    if (totalNegative % 2 === 0) {
        return "Positive";
    } else {
        return "Negative";
    }
}
function isNegative(number) {
    return number < 0;
}



console.log(signCheck(5, 12, -15));