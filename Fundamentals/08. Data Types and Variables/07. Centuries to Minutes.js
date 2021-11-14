function centuries(n) {
    let years = n * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = 24 * days;
    let minutes = 60 * hours;

    console.log(`${n} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}

centuries(1)
centuries(5)