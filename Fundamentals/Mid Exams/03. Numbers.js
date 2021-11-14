function numbers(arr) {
  let numbers = arr.split(" ").map(Number);
  let numbersLenght = numbers.length;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  let averageNumber = sum / numbersLenght;


    let emptyArr = [];
    for (let i = 0; i < numbers.length; i++) {
      let currentEl = numbers[i];
      if (currentEl > averageNumber) {
        emptyArr.push(currentEl);
      }
    }

    emptyArr.sort((a, b) => b - a);
    let finalArr = emptyArr.slice(0, 5);

    if (finalArr.length == 0) {
        console.log("No");
    }
    console.log(finalArr.join(" "));
  }


numbers('1');
