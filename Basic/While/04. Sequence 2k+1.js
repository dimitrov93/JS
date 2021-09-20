function seq(input) {
    let n = Number(input[0])
    let counter = 1;

    while (counter <= n) {
        console.log(counter);
        counter = (counter*2) + 1;
    }
}

seq(["31"])