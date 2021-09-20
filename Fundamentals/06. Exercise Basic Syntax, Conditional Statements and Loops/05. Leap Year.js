function leapYear(num) {
    if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
        console.log(`yes`);
    } else {
        console.log(`no`);
    }
}

leapYear(1984)