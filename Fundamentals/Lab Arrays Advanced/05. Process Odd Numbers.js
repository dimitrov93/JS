<<<<<<< HEAD
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

=======
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

>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
proceessOdd( [10, 15, 20, 25] )