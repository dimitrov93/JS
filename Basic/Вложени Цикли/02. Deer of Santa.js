function deers(input) {
    let sickLeave = Number(input[0]);
    let foodKGs = Number(input[1]);
    let first = Number(input[2]);
    let second = Number(input[3]);
    let third = Number(input[4]);

    let sumAllFood = (first + second + third)*sickLeave;
    let sumFood = foodKGs - ((first + second + third)*sickLeave); 

    if (sumAllFood < foodKGs) {
        console.log(`${Math.floor(sumFood)} kilos of food left.`);
    } else { 
        console.log(`${Math.ceil(sumAllFood - foodKGs)} more kilos of food are needed.`);
    }
}

deers(["5",
"10",
"2.1",
"0.8",
"11"])





