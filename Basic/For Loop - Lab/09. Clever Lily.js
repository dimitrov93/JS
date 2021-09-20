function lily(input) {
    let n = Number(input[0]);
    let laundry = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let toys = 0;
    let count = 0;
    let finalPrice = 0;
    let savedMoney = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            money += 10;
            savedMoney +=money;
            count++;
        } else {
            toys += 1;
        }
    }

    toys = toys * toyPrice;
    finalPrice = toys+savedMoney-count;

    if(finalPrice >= laundry) {
        console.log(`Yes! ${(finalPrice - laundry).toFixed(2)}`);
    } else {
        console.log(`No! ${(laundry - finalPrice).toFixed(2)}`);
    }
}

lily(["21", "1570.98", "3"])