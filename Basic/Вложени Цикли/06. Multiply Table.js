function table(input) {
    let n = Number(input[0]);

    let firstNum = n % 10;
    let secondNum = Math.floor((n % 100) / 10);
    let thirdNum = Math.floor(n/100)

   for (let i = 1; i <= firstNum; i++) {
       for (let b = 1; b <= secondNum; b++) {
           for (let c = 1; c <= thirdNum; c++) {
            console.log(`${i} * ${b} * ${c} = ${i * b * c};`);
           }
       }
   }
}

table(["222"])