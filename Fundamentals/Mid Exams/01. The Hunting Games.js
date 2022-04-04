<<<<<<< HEAD
function solve(arr) {
    let days = +arr.shift();
    let players = +arr.shift();
    let groupEnergy = +arr.shift();
    let water = +arr.shift();
    let food = +arr.shift();
    let energyLoss = arr.map(Number);
    let neededWater = days * players * water;
    let neededFood = days * players * food;
    let daysCount = 0;

    for (let i = 0; i < energyLoss.length; i++) {
        let currentEl = energyLoss[i];
        groupEnergy -= currentEl;
        daysCount++;

        if (daysCount % 2 === 0) {
            groupEnergy = (groupEnergy * 1.05)
            neededWater = neededWater - (neededWater * 30/100)
        }

        if (daysCount % 3 === 0) {
            neededFood -= (neededFood / players);
            groupEnergy = (groupEnergy * 1.10)

        }

        if (groupEnergy <= 0) {
            break;
        }
    }

    if (groupEnergy>0) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${neededFood.toFixed(2)} food and ${neededWater.toFixed(2)} water.`);
    }
}

solve(["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"])

=======
function solve(arr) {
    let days = +arr.shift();
    let players = +arr.shift();
    let groupEnergy = +arr.shift();
    let water = +arr.shift();
    let food = +arr.shift();
    let energyLoss = arr.map(Number);
    let neededWater = days * players * water;
    let neededFood = days * players * food;
    let daysCount = 0;

    for (let i = 0; i < energyLoss.length; i++) {
        let currentEl = energyLoss[i];
        groupEnergy -= currentEl;
        daysCount++;

        if (daysCount % 2 === 0) {
            groupEnergy = (groupEnergy * 1.05)
            neededWater = neededWater - (neededWater * 30/100)
        }

        if (daysCount % 3 === 0) {
            neededFood -= (neededFood / players);
            groupEnergy = (groupEnergy * 1.10)

        }

        if (groupEnergy <= 0) {
            break;
        }
    }

    if (groupEnergy>0) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${neededFood.toFixed(2)} food and ${neededWater.toFixed(2)} water.`);
    }
}

solve(["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"])

>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
