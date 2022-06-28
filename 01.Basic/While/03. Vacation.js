function vacation(input) {
    let moneyNeeded = Number(input[0]);
    let moneyInHand = Number(input[1]);
    let index = 2;
    let search = input[index];
    let spendMoney = 0;
    let savedMoney = 0;
    let sum = 0;
    let finish = false;

    while ((search == "spend") || (search == "save")  ) {
        let money = Number(input[index + 1]);
        if (search == "spend") {
            spendMoney++;
            if (spendMoney>=5) {
                finish = true;
            }
            moneyInHand = moneyInHand - money;
            if (moneyInHand < 0) {
                moneyInHand = 0;
            }
        } else  if ((search == "save")) {
            moneyInHand = moneyInHand + money;
            savedMoney++;
        }
        index+=2;
        search = input[index];
    }
    sum = savedMoney + spendMoney;
    if (finish) {
        console.log(`You can't save the money.`);
        console.log(sum);
    } else {
        console.log(`You saved the money for ${sum} days.`);
    }
}

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])




