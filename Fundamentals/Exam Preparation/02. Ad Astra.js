function solve([input]) {
    let regEx = /(\||\#)(?<name>[A-Za-z ]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>\d+)\1/gm
    let match = regEx.exec(input);
    let obj = [];
    let sum = 0;
    
    while (match !== null) {
        let name = match.groups.name;
        let date = match.groups.date;
        let calories = Number(match.groups.calories);
        obj.push({item: name, days: date, cal: calories})
        sum += calories;
        match = regEx.exec(input);
    }
    
    console.log(`You have food to last you for: ${Math.floor(sum / 2000)} days!`);
    for (let line of obj) {
        console.log(`Item: ${line.item}, Best before: ${line.days}, Nutrition: ${line.cal}`);
    }

}

solve([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]
    )