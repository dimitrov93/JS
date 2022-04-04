function solve(fruit,weight,money) {
    
    let kgs = weight / 1000;
    let finalPrice = kgs * money;
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${kgs.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)