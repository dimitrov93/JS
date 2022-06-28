function workOut(input) {
    let days = Number(input[0]);
    let firstDay = Number(input[1]);
    let index = 2;
    let finalSum = firstDay;
    let sum = finalSum;

    while (index != (days+2)) {
        let procent = Number(input[index]);
        finalSum += (finalSum*(procent/100));
        sum+=finalSum;
        index++;
    }

    if (sum >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(sum - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - sum)} more kilometers`);
    }
}

workOut(["4",
"100",
"30",
"50",
"60",
"80"])
