function numberMod(num) {
  let arrNum = num.toString().split("");

    function getMeTheNumber(arrNum) {
        let sum = 0;
        let index = 0;
        while (true) {
          sum = 0;
          index = 0;
          for (let i = 0; i < arrNum.length; i++) {
            sum += Number(arrNum[i]);
            index++;
          }
      
          if (sum / index > 5) {
            break;
          } else {
            arrNum.push(9);
          }
        }
        return arrNum;
    }

  console.log(getMeTheNumber(arrNum).join(''));
}

numberMod(101);
numberMod(5835);
