function newHouse(input) {
    let type = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;

    switch (type) {
        case "Roses":
            sum = 5 * count;
            if(count > 80) {
                sum = sum * 0.9;
            }
            break;
        case "Dahlias":
            sum = 3.80 * count;
            if(count > 90) {
                sum = sum * 0.85;
            }
            break;
        case "Tulips":
            sum = 2.80 * count;
            if(count > 80) {
                sum = sum * 0.85;
            }
            break;
        case "Narcissus":
            sum = 3 * count;
            if(count < 120) {
                sum = sum * 1.15;
            }
            break;
        case "Gladiolus":
            sum = 2.50 * count;
            if(count < 80) {
                sum = sum * 1.20;
            }
            break;
    }

    let diff = Math.abs(budget - sum).toFixed(2);

    if(budget >= sum) {
        console.log(`Hey, you have a great garden with ${count} ${type} and ${diff} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff} leva more.`);
    }

}



newHouse(["Roses",
    "55",
    "250"])