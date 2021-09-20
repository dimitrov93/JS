function xmas(input) {
    let daysToPlay = Number(input[0]);
    let days = 0;
    let index = 1;
    
    let money = 0;
    let counterGood = 0;
    let counterBad = 0;
    let moneyNeeded = 0;
    let cGood = 0;
    let cBad = 0;


    while (days < daysToPlay) {
        let gameName = input[index];
        if (gameName == `Finish`) {
            days++;
            index++;
            if (counterGood > counterBad) {
                moneyNeeded += money * 1.1;
            } else {
                moneyNeeded += money;
            }
            money = 0;
            counterGood = 0;
            counterBad = 0;
        }

        let result = input[index + 1];

        if (result == `win`) {
            money += 20;
            counterGood++;
            cGood++;
        } else if (result == `lose`) {
            counterBad++;
            cBad++;
        }
        index+=2;
    }
    if (cGood > cBad) {
        moneyNeeded *= 1.2;
        console.log(`You won the tournament! Total raised money: ${moneyNeeded.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${moneyNeeded.toFixed(2)}`);
    }
}
xmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])


