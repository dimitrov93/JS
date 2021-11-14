function proceessOdd(arr) {
    let sum = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            let currentNum = arr[i] * 2;
            sum.push(currentNum);
        }
    }

    console.log(sum.reverse().join(" "));
}

proceessOdd( [10, 15, 20, 25] )