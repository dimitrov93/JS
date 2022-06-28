function minNumber(input) {
    let index = 0;
    let checker = input[index];
    let minNum = Number(input[0]);


    while (checker !== `Stop`) {
        checker = input[index];
        let counter = Number(input[index]);
        if (counter < minNum) {
            minNum = counter;
        }
        index++;
    }

    console.log(minNum);
}

minNumber(["-1",
"-2",
"Stop"])




