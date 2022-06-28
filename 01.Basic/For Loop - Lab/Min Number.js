function minNumber(input) {

    let n = Number(input[0]);
    let theLowestNumber = Number(input[1]);
    let index = 0;

    for (let i = 1; i <= n; i++) {
        index = Number(input[i]);
        if (index < theLowestNumber) {
            theLowestNumber = index;
        }
    }
    console.log(theLowestNumber);
}
minNumber(["4",
"45",
"-20",
"7",
"99"])




