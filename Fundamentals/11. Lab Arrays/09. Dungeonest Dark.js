function solve(arr) {
  let health = 100;
  let coins = 0;

  let newArr = arr.toString().split("|");

  loop: for (let i = 0; i < newArr.length; i++) {
    let currentEl = newArr[i].split(" ");
    let firstEl = currentEl[0];
    let secondEl = Number(currentEl[1]);

    if (firstEl === "potion") {
        if (health + secondEl > 100) {
            console.log(`You healed for ${100 - health} hp.`);
            health = 100;
            console.log(`Current health: ${health} hp.`);
            continue;
        }
      health += Number(secondEl);
      console.log(`You healed for ${secondEl} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (firstEl === "chest") {
      console.log(`You found ${secondEl} coins.`);
      coins += Number(secondEl);
    } else {
      health -= secondEl;
      if (health <= 0) {
        console.log(`You died! Killed by ${firstEl}.`);
        console.log(`Best room: ${i + 1}`);
        break loop;
      }
      console.log(`You slayed ${firstEl}.`);
    }
  }

  if (health>0) {
      console.log("You've made it!");
      console.log(`Coins: ${coins}`);
      console.log(`Health: ${health}`);
  }
}

solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
