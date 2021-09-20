function combinations(input) {
    let combinations = Number(input[0]);
    let counts = 0;

    for (let first = 0; first <= 25; first++) {
        for (let second = 0; second <= 25; second++) {
            for (let third = 0; third <= 25; third++) {
                if (first + second + third === combinations) {
                    counts++
                }
            }
        }
    }

    console.log(counts);
}

combinations(["5"])