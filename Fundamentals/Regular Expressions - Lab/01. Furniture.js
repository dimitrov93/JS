function solve(arr) {
    let last = arr.pop();
    let regEx = />>(?<city>[A-Za-z]+)<<(?<price>(\d+(\.\d+)?))!(?<qty>\d+)/gm;
    let matches = [];
    let validmatch;
    let totalPrice = 0;

    while ((validmatch = regEx.exec(arr)) !== null) {
        let city = validmatch.groups.city;
        let price = +(validmatch.groups.price);
        let qty = +(validmatch.groups.qty);
        totalPrice += price * qty
        matches.push(city)
    }

    console.log(`Bought furniture: `);
    for (let word of matches) {
        console.log(word);
    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

solve(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
)
