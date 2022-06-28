function walking(input) {
    let index = 0;
    let steps = 0;
    let finish = false;

  while (steps <= 10000) {
      let goHome = input[index];
      if (goHome == `Going home`) {
        goHome = input[index+1]
        steps += Number(goHome);
        break;
      } else {
        steps += Number(goHome);
      }
      index++;
  }

    if (steps <= 10000) {
        console.log(`${Math.abs(10000 - steps)} more steps to reach goal.`);
    } else {
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - 10000} steps over the goal!`);
    }
}

walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])
















