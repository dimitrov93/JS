function solve(arr) {
  let peopleWaiting = Number(arr.shift());
  let currentState = arr.shift().split(" ").map(Number);
  let peopleEnter = 0;
  let difference = 0;

  for (let i = 0; i < currentState.length; i++) {
    let currentEl = currentState[i];

    if (peopleWaiting >= 4) {
      difference = 4 - currentEl;
    } else {
      difference = peopleWaiting - currentEl;
    }

    if (difference <= 4) {
      currentState[i] += difference;
      peopleWaiting -= difference;
    }

    if (peopleWaiting <= 0) {
      break;
    }
  }

  loop: if (peopleWaiting > 0) {
    console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
    console.log(currentState.join(" "));
  } else {
    for (let i = 0; i < currentState.length; i++) {
      let spots = currentState[i];

      if (spots < 4) {
        console.log(`The lift has empty spots!`);
        console.log(currentState.join(" "));
        break loop;
      }
    }

    if (peopleWaiting <= 0) {
      console.log(currentState.join(" "));
    }
  }
}

solve(
    [
        "14",
        "0 0 0 1 0"
       ]
       
    );
