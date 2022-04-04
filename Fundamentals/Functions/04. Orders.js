function orders(p, q) {
    let sumCoffee = () => q * 1.50;
    let sumWater = () => q * 1;
    let sumCoke = () => q * 1.4;
    let sumSnacks = () => q * 2;
    let result = 0;

    switch (p) {
        case "coffee":
            result = sumCoffee();
            break;
        case "water":
            result = sumWater();
            break;
        case "coke":
            result = sumCoke();
            break;
        case "snacks":
            result = sumSnacks();
            break;
        default:
            break;
    }

    console.log(result.toFixed(2));
}

orders("water", 5)