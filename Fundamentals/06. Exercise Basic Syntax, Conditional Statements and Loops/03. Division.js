function divisions(num) {

    let counter = 0;
    if (num % 10 === 0) {
        counter = 10;
    } else if (num % 7 === 0) {
        counter = 7;
    } else if (num % 6 === 0) {
        counter = 6;
    } else if (num % 3 === 0) {
        counter = 3;
    } else if (num % 2 === 0) {
        counter = 2;
    } 

    if (counter > 0) {
        console.log(`The number is divisible by ${counter}`);
    } else {
        console.log(`Not divisible`);
    }
}
divisions(30)