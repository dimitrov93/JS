function traveling(input) {
    let index = 0;
    let country = input[index];
    let budget = Number(input[1]);
    let money = 0;
    let counter = 2;

    while (country !== `End`) {
        money += Number(input[counter]);
        if (money >= budget) {
            console.log(`Going to ${country}!`);
            country = input[counter + 1];
            money = 0;
            budget = Number(input[counter+2]);
            counter+=2;
        }
        counter++;
    }
}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])


