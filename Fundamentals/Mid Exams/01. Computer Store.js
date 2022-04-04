<<<<<<< HEAD
function solve(arr) {
    let command = arr.pop();
    let priceList = arr.map(Number);
    let tax = 1.2;
    let totalTax = 0;
    let totalPriceWithoutTax = 0;
    let totalPRiceWithTAx = 0;

    for (let i = 0; i < priceList.length; i++) {
        if (priceList[i] < 0) {
            console.log("Invalid price!");
            continue;
        }
        let currentPrice = priceList[i];
        totalPriceWithoutTax += currentPrice;
        totalPRiceWithTAx += (currentPrice * tax)
        totalTax = (totalPRiceWithTAx - totalPriceWithoutTax)
    }

    if (totalPriceWithoutTax === 0) {
        console.log("Invalid order!");
    } else {
        if (command === "special") {
            totalPRiceWithTAx *= 0.9;
            console.log("Congratulations you've just bought a new computer!");
            console.log(`Price without taxes: ${totalPriceWithoutTax.toFixed(2)}$`);
            console.log(`Taxes: ${totalTax.toFixed(2)}$`);
            console.log("-----------");
            console.log(`Total price: ${totalPRiceWithTAx.toFixed(2)}$`);
        } else {
            console.log("Congratulations you've just bought a new computer!");
            console.log(`Price without taxes: ${totalPriceWithoutTax.toFixed(2)}$`);
            console.log(`Taxes: ${totalTax.toFixed(2)}$`);
            console.log("-----------");
            console.log(`Total price: ${totalPRiceWithTAx.toFixed(2)}$`);
        }
    }

}

solve([
    'regular'
    ])
    
    
    
    
    
    
    
    
    
    
    
=======
function solve(arr) {
    let command = arr.pop();
    let priceList = arr.map(Number);
    let tax = 1.2;
    let totalTax = 0;
    let totalPriceWithoutTax = 0;
    let totalPRiceWithTAx = 0;

    for (let i = 0; i < priceList.length; i++) {
        if (priceList[i] < 0) {
            console.log("Invalid price!");
            continue;
        }
        let currentPrice = priceList[i];
        totalPriceWithoutTax += currentPrice;
        totalPRiceWithTAx += (currentPrice * tax)
        totalTax = (totalPRiceWithTAx - totalPriceWithoutTax)
    }

    if (totalPriceWithoutTax === 0) {
        console.log("Invalid order!");
    } else {
        if (command === "special") {
            totalPRiceWithTAx *= 0.9;
            console.log("Congratulations you've just bought a new computer!");
            console.log(`Price without taxes: ${totalPriceWithoutTax.toFixed(2)}$`);
            console.log(`Taxes: ${totalTax.toFixed(2)}$`);
            console.log("-----------");
            console.log(`Total price: ${totalPRiceWithTAx.toFixed(2)}$`);
        } else {
            console.log("Congratulations you've just bought a new computer!");
            console.log(`Price without taxes: ${totalPriceWithoutTax.toFixed(2)}$`);
            console.log(`Taxes: ${totalTax.toFixed(2)}$`);
            console.log("-----------");
            console.log(`Total price: ${totalPRiceWithTAx.toFixed(2)}$`);
        }
    }

}

solve([
    'regular'
    ])
    
    
    
    
    
    
    
    
    
    
    
>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
    