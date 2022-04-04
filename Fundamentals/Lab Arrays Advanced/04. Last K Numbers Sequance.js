<<<<<<< HEAD
function lastKNumbersSeq(n,k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let maxNum = Math.max(0, i-k)
        let currentSum = arr.slice(maxNum,maxNum+k).reduce((acc,el) => {return acc+el},0)
        arr.push(currentSum)
    }
    console.log(arr.join(" "));
}

=======
function lastKNumbersSeq(n,k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let maxNum = Math.max(0, i-k)
        let currentSum = arr.slice(maxNum,maxNum+k).reduce((acc,el) => {return acc+el},0)
        arr.push(currentSum)
    }
    console.log(arr.join(" "));
}

>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
lastKNumbersSeq(6, 3)