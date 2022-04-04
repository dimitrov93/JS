function solve(arr) {
    let finalNum = [];
    let flag = false;
    let lastNum = arr.length;
    for (let i = 0; i < arr.length; i++) {
        let big = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
                let low = arr[j]
                if (big > low) {
                    flag = true;
                } else {
                    flag = false;
                    break;
                }
            }
            if (flag === true) {
                finalNum.push(arr[i]);
            } else if (i + 1 === lastNum) {
                finalNum.push(arr[i]);
            }
    }

    console.log(finalNum.join(" "));
}

solve([14, 24, 3, 19, 15, 17])