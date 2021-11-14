function equalArrays(arr1,arr2) {
    let equal = true;
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i])
    }

    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i])
    }

    for (let j = 0; j < arr1.length; j++) {
        if (arr1[j] !== arr2[j]) {
            console.log(`Arrays are not identical. Found difference at ${j} index`);
            equal = false;
            break;
        } else {
            sum += arr1[j];
        }
    }

    if (equal) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10','20','30'], ['10','20','30'])
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])
equalArrays(['1'], ['10'])
