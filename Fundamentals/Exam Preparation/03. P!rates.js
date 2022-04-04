function solve(input) {
    input.pop();
    let sailIndex = input.indexOf("Sail");
    let townsInput = input.slice(0, sailIndex);
    let townsAction = input.slice(sailIndex + 1)
    let obj = {}

    for (let word of townsInput) {
        let [town, people, money] = word.split("||");

        if (!obj.hasOwnProperty(town)) {
            obj[town] = {
                population: 0,
                gold: 0
            }
        }

        obj[town].population += Number(people)
        obj[town].gold += Number(money)
    }

    for (let word of townsAction) {
        let currentLine = word.split("=>");

        if (currentLine[0] === "Plunder") {
            let town = currentLine[1]
            let people = +currentLine[2]
            let money = +currentLine[3]
            obj[town].population -= people;
            obj[town].gold -= money;

            console.log(`${town} plundered! ${money} gold stolen, ${people} citizens killed.`);

            if (obj[town].population <= 0 || obj[town].gold <= 0) {
                console.log(`${town} has been wiped off the map!`);
                delete obj[town];
            }
        } else if (currentLine[0] === "Prosper") {
            let town = currentLine[1]
            let money = +currentLine[2]

            if (money < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                obj[town].gold += money;
                console.log(`${money} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`);
            }
        }
    }

    let entrLength = Object.entries(obj);
    let sorted = entrLength.sort((a, b) => {
        let townAName = a[0];
        let townBName = b[0];
        let townAProperty = a[1];
        let townBProperty = b[1];

        if (townAProperty.gold !== townBProperty.gold) {
            return townBProperty.gold - townAProperty.gold
        } else {
            return townAName.localeCompare(townBName)
        }
    });
    if (entrLength.length > 0) {
        console.log(`Ahoy, Captain! There are ${entrLength.length} wealthy settlements to go to:`);
        for (let line of sorted) {
            let town = line[0];
            let pop = line[1];
            console.log(`${town} -> Population: ${pop.population} citizens, Gold: ${pop.gold} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}

solve(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])

