function accountBalance(input) {
    let deposit = input[0];
    let sum = 0;
    let index = 1;

    while (deposit !== "NoMoreMoney") {
        let budget = Number(deposit);
        if (budget < 0) {
            console.log("Invalid operation!");
            break;
        }
        sum += budget;
        console.log(`Increase: ${budget.toFixed(2)}`);
        deposit = input[index]
        index++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])


