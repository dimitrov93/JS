function sum(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 2 === 0) {
            sum += Number(arr[i]);
        }
    }

    let sum2 = 0;
    
    for (let num of arr) {
        if (num % 2 === 0) {
            sum2 += Number(num);
        }
    }

    console.log(sum2);
}

sum(['1','2','3','4','5','6'])
sum(['3','5','7','9'])
sum(['2','4','6','8','10'])