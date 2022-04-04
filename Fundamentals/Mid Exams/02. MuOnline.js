<<<<<<< HEAD
function muOnline(arr) {
  let targets = arr.shift().split(" ").map(Number);
  arr.pop();
  let shots = arr.map(Number);
  let counter = 0;

  for (let i = 0; i < shots.length; i++) {
    let index = shots[i];
    if (index > targets.length - 1) {
      continue;
    } else {
      let currentValue = targets[index];
      targets[index] = -1;
      counter++;

      for (let j = 0; j < targets.length; j++) {
        if (targets[j] > -1) {
          if (targets[j] > currentValue) {
            targets[j] = targets[j] - currentValue;
          } else {
            targets[j] = targets[j] + currentValue;
          }
        }
      }
    }
  }

  console.log(`Shot targets: ${counter} -> ${targets.join(" ")}`);
}

muOnline(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
=======
function muOnline(arr) {
  let targets = arr.shift().split(" ").map(Number);
  arr.pop();
  let shots = arr.map(Number);
  let counter = 0;

  for (let i = 0; i < shots.length; i++) {
    let index = shots[i];
    if (index > targets.length - 1) {
      continue;
    } else {
      let currentValue = targets[index];
      targets[index] = -1;
      counter++;

      for (let j = 0; j < targets.length; j++) {
        if (targets[j] > -1) {
          if (targets[j] > currentValue) {
            targets[j] = targets[j] - currentValue;
          } else {
            targets[j] = targets[j] + currentValue;
          }
        }
      }
    }
  }

  console.log(`Shot targets: ${counter} -> ${targets.join(" ")}`);
}

muOnline(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
