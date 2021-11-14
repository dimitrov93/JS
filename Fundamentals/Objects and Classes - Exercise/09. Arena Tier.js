function gladiator(arr) {
    let obj = {};

    for (let line of arr) {
        [gladName,technique,skill] = line.split(" -> ")

        if (gladName === "Ave Cesar") {
            break;
        }
        if (!obj.hasOwnProperty(gladName)) {
            obj[gladName] = []
        }

        if (!obj[gladName].hasOwnProperty(technique)) {
            obj[gladName].push(technique);
            obj[gladName][technique] = Number(skill)
        }
    }

    let theKeys = Object.keys(obj);
    for (let name of theKeys) {
        let result = [];
        for (let count of obj[name]) {
            console.log(count);
        }
    }
}

gladiator(
    [
        'Peter -> BattleCry -> 400',
        'Alex -> PowerPunch -> 300',
        'Stefan -> Duck -> 200',
        'Stefan -> Tiger -> 250',
        'Ave Cesar'
        ]
        
)