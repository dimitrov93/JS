function reversedString(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0 ; i--) {
        newArr.push(arr[i]);
    }



    for (let i = 0; i < arr.length / 2; i++) {
        let buffer = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = buffer;
    }

    console.log(arr.join(" ").toString());
    
}
reversedString(['a', 'b', 'c', 'd', 'e'])
reversedString(['abc', 'def', 'hig', 'klm', 'nop'])
reversedString(['33', '123', '0', 'dd'])