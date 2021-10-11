function solve(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let index = 0;
    let flag = false;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
            for (let j = i + 1; j < arr.length; j++) {
                rightSum += arr[j]
            }

            for (let j = i -1 ; j >= 0; j--) {
                leftSum += arr[j];
            }

            if (rightSum === leftSum) {
                flag = true;
                index = i;
                break;
            } 

            leftSum = 0;
            rightSum = 0;
    }

    if (flag) {
        console.log(index);
    } else {
        console.log("no");
    }
}
solve([1, 2, 3, 3])
solve([1, 2])
solve([1])
solve([1,2,3])
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])