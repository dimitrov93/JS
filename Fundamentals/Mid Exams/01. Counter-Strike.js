function strike(arr) {
    let wins = 0;
    let energy = +arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let currentEL = arr[i];
        if (currentEL === "End of battle") {
            console.log(`Won battles: ${wins}. Energy left: ${energy}`);
            break;
        }
        let distance = +currentEL;

        if (energy - distance >= 0) {
            wins++;
            energy -= distance;
        } else {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            break;
        }

        if (wins % 3 === 0) {
            energy += wins;
        }
        
    }
}

strike(["200",
"54",
"14",
"28",
"13",
"End of battle"])

