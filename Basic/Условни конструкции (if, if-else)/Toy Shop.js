function toyShop(input) {
    let tripPrce = Number(input[0]);

    let puzzlesNumber = Number(input[1]);
    let toysNumber = Number(input[2]);
    let bearsNumber = Number(input[3]);
    let minionsNumber = Number(input[4]);
    let trucksNumber = Number(input[5]);

    let allNumbers = puzzlesNumber + toysNumber + bearsNumber + minionsNumber + trucksNumber;

    let puzzlesPrice = puzzlesNumber * 2.60;
    let toysPrice = toysNumber * 3;
    let bearsPrice = bearsNumber * 4.10;
    let minionsPrice = minionsNumber * 8.20;
    let trucksPrice = trucksNumber * 2;

    let allPrice = puzzlesPrice + toysPrice + bearsPrice + minionsPrice + trucksPrice;

    if (allNumbers >= 50) {
        allPrice = allPrice * 0.75;
    }

    let moneyAfterRent = allPrice * 0.90;

    if(moneyAfterRent >= tripPrce) {
        console.log(`Yes! ${((moneyAfterRent - tripPrce).toFixed(2))} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrce - moneyAfterRent).toFixed} lv needed.`);
    }
 
}

toyShop(["320", "8", "2", "5", "5", "1"])
