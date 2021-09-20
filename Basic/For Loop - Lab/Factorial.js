function factorial(input) {
    let num = Number(input[0]);
    let sum = 1;

    for (let i = 1; i <= num; i++) {
        sum = sum  * i;
    }
    console.log(sum);
}
factorial(["4"])
