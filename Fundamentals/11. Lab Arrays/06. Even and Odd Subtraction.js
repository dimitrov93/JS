function evenAndOdd(arr) {
    let even = 0;
    let odd = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            even += Number(num)
        } else {
            odd += Number(num)
        }
    }

    let even1 = 0;
    let odd1 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even1 += Number(arr[i]);
        } else {
            odd1 += Number(arr[i]);
        }
    }

    console.log(even1 - odd1);
}
evenAndOdd([1,2,3,4,5,6])
evenAndOdd([3,5,7,9])
evenAndOdd([2,4,6,8,10])