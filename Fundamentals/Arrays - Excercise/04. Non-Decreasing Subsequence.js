function solve(arr) {
    let biggestNum = 0;
    let emptyArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (biggestNum <= arr[i]) {
            biggestNum = arr[i];
            emptyArr.push(biggestNum);
        }
    }

    console.log(emptyArr.join(" "));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24])
solve([ 1, -2, 3, 0])
solve([ 20, 3, 2, 15, 6, 1])