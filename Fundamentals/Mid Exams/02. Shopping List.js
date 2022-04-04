<<<<<<< HEAD
function solve(arr) {
  let listArr = arr.shift().split("!");
  arr.pop();

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i].split(" ");
    let command = element.shift();
    let item = element.shift();

    if (command === "Urgent") {
      let flag = true;
      for (let j = 0; j < listArr.length; j++) {
        let currentEl = listArr[j];
        if (currentEl === item) {
          flag = false;
          break;
        }
      }
      if (flag) {
        listArr.unshift(item);
      }
    } else if (command === "Unnecessary") {
      for (let j = 0; j < listArr.length; j++) {
        let currentEl = listArr[j];
        if (currentEl === item) {
          listArr.splice(j, 1);
          break;
        }
      }
    } else if (command === "Correct") {
      let newName = element.shift();
      for (let j = 0; j < listArr.length; j++) {
        let currentEl = listArr[j];
        if (currentEl === item) {
          listArr.splice(j, 1, newName);
          break;
        }
      }
    } else if (command === "Rearrange") {
      for (let j = 0; j < listArr.length; j++) {
        let currentEl = listArr[j];
        if (currentEl === item) {
           let newName = listArr.splice(j, 1);
           listArr.push(newName)
            break;
          }
      }
    }
  }

  console.log(listArr.join(", "));
}

solve(["Grapes!Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Correct Pepper Onion",
"Rearrange Grapes",
"Urgent Tomatoes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])


=======
function solve(arr) {
  let listArr = arr.shift().split("!");
  arr.pop();

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i].split(" ");
    let command = element.shift();
    let item = element.shift();

    if (command === "Urgent") {
      let flag = true;
      for (let j = 0; j < listArr.length; j++) {
        let currentEl = listArr[j];
        if (currentEl === item) {
          flag = false;
          break;
        }
      }
      if (flag) {
        listArr.unshift(item);
      }
    } else if (command === "Unnecessary") {
      for (let j = 0; j < listArr.length; j++) {
        let currentEl = listArr[j];
        if (currentEl === item) {
          listArr.splice(j, 1);
          break;
        }
      }
    } else if (command === "Correct") {
      let newName = element.shift();
      for (let j = 0; j < listArr.length; j++) {
        let currentEl = listArr[j];
        if (currentEl === item) {
          listArr.splice(j, 1, newName);
          break;
        }
      }
    } else if (command === "Rearrange") {
      for (let j = 0; j < listArr.length; j++) {
        let currentEl = listArr[j];
        if (currentEl === item) {
           let newName = listArr.splice(j, 1);
           listArr.push(newName)
            break;
          }
      }
    }
  }

  console.log(listArr.join(", "));
}

solve(["Grapes!Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Correct Pepper Onion",
"Rearrange Grapes",
"Urgent Tomatoes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])


>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
