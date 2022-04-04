function solve(input) {
    let result = [];

    for (const line of input) {
        let [name, level, items] = line.split(" / ")
        level = Number(level);
        items = items ? items.split(", ") : [];
        //•	If there are any items in the input, the variable will be set to the split version of them. 
        // If not, it will just be set to an empty array.

        result.push({name, level, items})
    }

    console.log( JSON.stringify(result));
}

solve(
    ['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']

)
