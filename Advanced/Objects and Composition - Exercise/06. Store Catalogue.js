function solve(input) {
    let char = "";
    let sorted = input.sort((a,b) => {
        return a.localeCompare(b)
    })

    for (const line of sorted) {
        let [product, price] = line.split(" : ");
        price = Number(price)
        
        if (char !== product[0]) {
            char = product[0];
            console.log(char);
        }
        console.log(`  ${product}: ${price}`);
    }
}


solve(

    ['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']



)