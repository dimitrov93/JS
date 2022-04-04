<<<<<<< HEAD
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

    let spotFlag = false;
    for (let i = 0; i < currentState.length; i++) {
        let checkSpot = currentState[i];
        if (checkSpot < 4) {
            spotFlag = true  /// ima mesta
        } else {
            spotFlag = false;
        }
    }

    if (spotFlag === "false" && peopleWaiting <=0) {
        console.log(currentState.join(" "));
    } else if (spotFlag && peopleWaiting <= 0) {
        console.log(`The lift has empty spots!`);
        console.log(currentState.join(" "));
    } else if (peopleWaiting > 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(currentState.join(" "));
    }

}

 
  
  solve(
    [
        "20",
        "0 2 0"
       ]
       
       
         
      );
=======
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

    let spotFlag = false;
    for (let i = 0; i < currentState.length; i++) {
        let checkSpot = currentState[i];
        if (checkSpot < 4) {
            spotFlag = true  /// ima mesta
        } else {
            spotFlag = false;
        }
    }

    if (spotFlag === "false" && peopleWaiting <=0) {
        console.log(currentState.join(" "));
    } else if (spotFlag && peopleWaiting <= 0) {
        console.log(`The lift has empty spots!`);
        console.log(currentState.join(" "));
    } else if (peopleWaiting > 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(currentState.join(" "));
    }

}

 
  
  solve(
    [
        "20",
        "0 2 0"
       ]
       
       
         
      );
>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
