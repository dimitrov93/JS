function gladiator(lostFight, helmPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let helm = 0;
    let sword = 0;
    let armor = 0;
    let shield = 0;

    for (let i = 1; i <= lostFight; i++) {
        if (i % 3 === 0) {
            sword++;

        }
        if (i % 2 === 0) {
            helm++;
        }

        if (i % 2 === 0 && i % 3 ===0) {
            shield++;
            if (shield % 2 === 0) {
                armor++;
            }
        }
    }

    expenses = (sword * swordPrice) + (helm * helmPrice) + (shield * shieldPrice) + (armor * armorPrice);
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
 
}

gladiator(7, 2, 3, 4, 5)
gladiator(23,12.50,21.50,40,200)
