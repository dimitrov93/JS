function arrayToNum(arr) {

    while (arr.length > 1) {
        let buffer = [];
        let sum = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            sum = arr[i] + arr[i + 1];
            buffer.push(sum);
     }
     arr = buffer;
    }

    console.log(arr[0]);
}

arrayToNum([2,10,3])
arrayToNum([5,0,4,1,2])
arrayToNum([1])