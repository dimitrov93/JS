function solve(input) {
    const n = +input.shift();
    const regEx = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/
    
    for (let line of input) {
        let match = regEx.exec(line);

        if (match) {
            let productGrp = "";
            let product = match.groups.product;

            for (let ch of product) {
                let isNumber = Number(ch);
                if (isNumber * 1 === isNumber) {
                    productGrp += ch;
                }
            }

            if (productGrp === "") {
                productGrp = "00";
            }
            console.log(`Product group: ${productGrp}`);
        } else {
            console.log(`Invalid barcode`);
        }
    }
}

solve(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])

