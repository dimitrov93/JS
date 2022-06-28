function xMasPrep(input) {
    let paper = Number(input[0]);
    let cloth = Number(input[1]);
    let glue = Number(input[2]);
    let discount = Number(input[3]);

    paper = paper * 5.80;
    cloth = cloth * 7.20;
    glue = glue * 1.2;

    let sum = paper + cloth + glue;
    let finalSum = sum - (sum * discount/100);
    console.log(finalSum.toFixed(3));
}

xMasPrep(["7",
"8",
"0.5",
"45"])