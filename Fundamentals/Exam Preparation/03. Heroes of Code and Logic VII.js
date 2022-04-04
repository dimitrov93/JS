function solve(input) {
    let herNum = input.shift();
    let heroes = {};

    while (herNum > 0) {
        let line = input.shift().split(" ");

        let heroName = line[0];
        let heroHP = Number(line[1])
        let heroMP = Number(line[2])

        if (heroHP > 100) {
            heroHP = 100;
        }
        if (heroMP > 200) {
            heroMP = 200;
        }

        heroes[heroName] = [heroHP, heroMP]
        herNum--
    }

    let [command, hero, amount, spell] = input.shift().split(" - ");

    while (command !== "End") {
        switch (command) {
            case `CastSpell`:

                if (heroes.hasOwnProperty(hero)) {
                    let current = heroes[hero];
                    let currentMP = current[1];
                    amount = Number(amount);
                    if (currentMP >= amount) {
                        currentMP -= amount;
                        current[1] = currentMP;
                        heroes[hero] = current;
                        console.log(`${hero} has successfully cast ${spell} and now has ${currentMP} MP!`);
                    } else {
                        console.log(`${hero} does not have enough MP to cast ${spell}!`);
                    }
                }
                break;
            case `TakeDamage`:
                if (heroes.hasOwnProperty(hero)) {
                let current = heroes[hero];
                let currentHP = current[0];
                amount = Number(amount);
                currentHP -= amount;
                if (currentHP > 0) {
                    current[0] = currentHP;
                    heroes[hero] = current;
                    console.log(`${hero} was hit for ${amount} HP by ${spell} and now has ${currentHP} HP left!`);
                } else {
                    delete heroes[hero];
                    console.log(`${hero} has been killed by ${spell}!`);
                }
            }
                break;
            case `Recharge`:
                if (heroes.hasOwnProperty(hero)) {
                    let current = heroes[hero];
                    let currentMP = current[1];
                    let needMP = 200 - currentMP;
                    amount = Number(amount);
                    currentMP += amount;

                    if (currentMP > 200) {
                        currentMP = 200;
                        amount = needMP;
                    }
                    current[1] = currentMP;
                    heroes[hero] = current;
                    console.log(`${hero} recharged for ${amount} MP!`);
                }
                break;
            case `Heal`:
                if (heroes.hasOwnProperty(hero)) {
                    let current = heroes[hero];
                    let currentHP = current[0];
                    let needHP = 100 - currentHP;
                    amount = Number(amount);
                    currentHP += amount;
                    if (currentHP > 100) {
                        currentHP = 100;
                        amount = needHP;
                    }
                    current[0] = currentHP;
                    heroes[hero] = current;
                    console.log(`${hero} healed for ${amount} HP!`);
                }
                break;

            default:
                break;
        }

        [command, hero, amount, spell] = input.shift().split(" - ");
    }
    
    let theHeroes = Object.entries(heroes);
    let sorted = theHeroes.sort(sortHeroes);

    function sortHeroes(HeroA, HeroB) {
        let heroNameA = HeroA[0]
        let heroNameB = HeroB[0]
        let heroPointsA = HeroA[1]
        let heroPointsb = HeroB[1]
        let heroHPA = heroPointsA[0]
        let heroHPB = heroPointsb[0]

        if (heroHPA === heroHPB) {
            return heroNameA.localeCompare(heroNameB)
        } else {
            return heroHPB - heroHPA
        }

    }
    
    for (let line of sorted) {
        console.log(line[0]);
        console.log(`  HP: ${line[1][0]}`);
        console.log(`  MP: ${line[1][1]}`);
    }
}

solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])