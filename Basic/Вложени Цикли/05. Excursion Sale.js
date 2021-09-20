function sale(input) {
    let numberS = Number(input[0]);
    let numberM = Number(input[1]);
    let index = 2;
    let search = input[index];
    let budget = 0;
    let counterS = 0;

    while (search !== 'Stop') {
        switch (search) {
            case 'sea':
                if (numberS===0) {
                    break;
                }
                budget = budget + 680;
                numberS--;
                break;
            case 'mountain':
                if (numberM===0) {
                    break;
                }
                budget = budget + 499;
                numberM--;
                break;
            default:
                break;
        }

        if (numberS === 0 && numberM===0 ) {
            break;
        }
        index++;
        search = input[index];
    }

    if (numberS === 0 && numberM===0 ) {
        console.log(`Good job! Everything is sold.`);
        console.log(`Profit: ${budget} leva.`);
    } else {
        console.log(`Profit: ${budget} leva.`);

    }


}

sale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])

