<<<<<<< HEAD
function fuelMoney(distance, passengers, priceLiter) {
    let neededFuel = (distance / 100 ) * 7;
    neededFuel += passengers * 0.1;
    let moneyCost = neededFuel * priceLiter;
    console.log(`Needed money for that trip is ${moneyCost} lv.`);
}

fuelMoney(260, 9, 2.49)
=======
function fuelMoney(distance, passengers, priceLiter) {
    let neededFuel = (distance / 100 ) * 7;
    neededFuel += passengers * 0.1;
    let moneyCost = neededFuel * priceLiter;
    console.log(`Needed money for that trip is ${moneyCost} lv.`);
}

fuelMoney(260, 9, 2.49)
>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
fuelMoney(90, 14, 2.88)