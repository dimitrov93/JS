function sumOfTwo(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let num = Number(input[2]);
    let firstFind = 0;
    let secondFind = 0;
    let finish = false;
    let goodCombs = 0;    
    let badCombs = 0;

    loop: for (let index = first; index <= second; index++) {
        for (let indexTwo = first; indexTwo <= second; indexTwo++) {
            if (index + indexTwo === num) {
                goodCombs++;
                firstFind = index;
                secondFind = indexTwo;
                finish = true;
                break loop;
            } else {
                badCombs++;
            }
        }
    }

    if (finish) {
        console.log(`Combination N:${goodCombs + badCombs} (${firstFind} + ${secondFind} = ${firstFind + secondFind})`);
     } else {
         console.log(`${badCombs + goodCombs} combinations - neither equals ${num}`);
     }
}

sumOfTwo(["88", 
"888", 
"2000"])




