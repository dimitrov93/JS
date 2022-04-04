function solve(input) {
    let n = input.shift();
    input.pop();

    let plantObj = {};

    while (n > 0) {
        let current = input.shift().split("<->");
        let plant = current[0];
        let rarity = Number(current[1]);

        if (!plantObj.hasOwnProperty(plant)) {
            plantObj[plant] = {
                rarity: rarity,
                rating: 0,
            };
        } else {
            plantObj[plant].rarity = rarity;
        }
        n--
    }

    for (let line of input) {
        let current = line.split(": ").join(" ").split(" - ").join(" ").split(" ");
        let command = current[0];
        let name = current[1];

        if (plantObj.hasOwnProperty(name)) {
            if (command === "Rate") {
                let rating = +current[2];
    
                if (plantObj[name].rating === 0) {
                    plantObj[name].rating += rating
                } else {
                    plantObj[name].rating = (plantObj[name].rating + rating) / 2;
                }
            } else if (command === "Update") {
                let name = current[1];
                let updateRarity = +current[2];
    
                if (plantObj.hasOwnProperty(name)) {
                    plantObj[name].rarity = updateRarity
                }
            } else if (command === "Reset") {
                let name = current[1];
    
                if (plantObj.hasOwnProperty(name)) {
                    plantObj[name].rating = 0;
                }
            }
        } else {
            console.log("error");
        }

    }

    let entries = Object.entries(plantObj);
    let sort = entries.sort((a,b) => {
        if (b[1].rarity === a[1].rarity) {
            return b[1].rating - a[1].rating;
        } else {
            return b[1].rarity - a[1].rarity;
        }
    })

    console.log(`Plants for the exhibition:`);
    for (let plant of sort) {
        console.log(`- ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: ${(plant[1].rating.toFixed(2))}`);
    }
}

solve(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])


