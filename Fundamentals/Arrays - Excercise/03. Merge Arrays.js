function solve(arr1,arr2) {
    arr3 = [];

    for (let i = 0; i < arr1.length; i++) {
            if (i % 2 === 0) {
                arr3.push(Number(arr1[i]) + Number(arr2[i]));
            } else {
                arr3.push(arr1[i] + arr2[i]);
            }
    }
    console.log(arr3.join(" - "));
}

solve(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']

)