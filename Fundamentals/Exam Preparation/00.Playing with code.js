function solve(input) {
  let sailIndex = input.indexOf("Sail");
  let obj = {};

  while (sailIndex > 0) {
    let current = input.shift().split("||")
    let cityName = current[0];
    let population = +current[0];
    let gold = +current[0];
    
    if (!obj.hasOwnProperty(cityName)) {
      obj[cityName] = {
        population: 0,
        gold: 0
      }
      obj[cityName].population += population;
      obj[cityName].gold += gold;
    }
    sailIndex--
  }

  console.log(obj);
}

solve((["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])
)