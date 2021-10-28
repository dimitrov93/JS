function lastKNumbersSeq(n,k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let maxNum = Math.max(0, i-k)
        let currentSum = arr.slice(maxNum,maxNum+k).reduce((acc,el) => {return acc+el},0)
        arr.push(currentSum)
    }
    console.log(arr.join(" "));
}

lastKNumbersSeq(6, 3)