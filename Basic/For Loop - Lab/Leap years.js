function leapYear(input) {
    let leapYear = Number(input[0]);
    let year = Number(input[1]);

    for (let i = leapYear; i <= year; i++) {
        if(i % 4 === 0 || i % 400 ===0) {
            console.log(i);
        }
        
    }
}
leapYear(["1908",
"1919"])
