function GodzillaVsKong(input) {
    let budget = Number(input[0]);
    let statics = Number(input[1]);
    let priceForClothsPerStatics = statics * Number(input[2]);
    let discount = priceForClothsPerStatics * 0.1;

    let decor = budget * 0.10;
    if (statics > 150) {
        priceForClothsPerStatics = priceForClothsPerStatics - discount ;
    }

    let totalSum = priceForClothsPerStatics  + decor;

    if (totalSum > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalSum - budget).toFixed(2)} leva more.`);
    } else if (totalSum <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalSum).toFixed(2)} leva left.`);
    }

    
}

GodzillaVsKong
(["9587.88",
"222",
"55.68"])



