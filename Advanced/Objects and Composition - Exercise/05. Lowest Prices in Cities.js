function solve(input) {

    let result = {};

    for (const line of input) {
        let [townName, productName, productPrice] = line.split(" | ");
        productPrice = Number(productPrice);

        if (!result.hasOwnProperty(productName)) {
            result[productName] = {productPrice, townName};
        } else {
            let price1 = result[productName].productPrice;
            let price2 = productPrice;
            if (price1 > price2) {
                result[productName].productPrice = productPrice;
                result[productName].townName = townName
            }
        }
    }
    
    for (const key in result) {
        console.log(`${key} -> ${result[key].productPrice} (${result[key].townName})`);
    }
}

solve(
    [   'Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0',
        'Mexico City | Audi | 1000',
        'Mexico City | BMW | 99999',
        'Mexico City | Mitsubishi | 10000',
        'New York City | Mitsubishi | 1000',
        'Washington City | Mercedes | 1000']

)