function solve(arr) {
    let odd = 0;
    let oldSum = 0;
    let newSum = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(Number(arr[i] + i));
            oldSum += arr[i];
            newSum += newArr[i];
        } else {
            newArr.push(Number(arr[i] - i));
            oldSum += arr[i];
            newSum += newArr[i];
        }
    }
    console.log(newArr);
    console.log(oldSum);
    console.log(newSum);

}

solve([-5, 11, 3, 0, 2])