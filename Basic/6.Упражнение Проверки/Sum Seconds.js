function sumSeconds(input) {
    let secOne = Number(input[0]);
    let secTwo = Number(input[1]);
    let secThree = Number(input[2]);

    let sumSeconds = secOne + secTwo + secThree;

    let minutes = Math.floor(sumSeconds / 60);
    let seconds = sumSeconds % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}

sumSeconds(["14", "12",
"10"])



