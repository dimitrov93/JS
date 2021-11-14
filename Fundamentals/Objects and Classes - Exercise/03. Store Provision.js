function storeProv(stock,orders) {
   
    let storeProducts = {};

    for (let i = 0; i < stock.length; i+=2) {
        let product = stock[i];
        storeProducts[product] = Number(stock[i + 1]);
    }

    for (let i = 0; i < orders.length; i+=2) {
        let product = orders[i];
        
        if (!storeProducts.hasOwnProperty(product)) {
            storeProducts[product] = 0;
        }

        storeProducts[product] += Number(orders[i+1]);
    }

    let obj = Object.entries(storeProducts);
    obj.forEach(el => {
        console.log(el.join(" -> "));
    });
}

storeProv([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )