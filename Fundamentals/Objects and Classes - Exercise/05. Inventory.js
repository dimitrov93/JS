function inventory(arr) {
    let hero = [];

    for (let line of arr) {
        let [name,level,items] = line.split(" / ");
        let splitted = items.split(", ");
        splitted.sort((a, b)=>a.localeCompare(b));

        let heroes = {
            name:name,
            level: +level,
            items: splitted
        };


        hero.push(heroes)
    }

    let sortedHeroes = hero.sort((a, b) => a.level - b.level);
    sortedHeroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    });
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )