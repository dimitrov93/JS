function reversed(n, arr) {
    let newArr = [];
    for (let i = n - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    console.log(newArr.join(" "));
}
reversed(3, [10, 20, 30, 40, 50])
reversed(4, [-1, 20, 99, 5])
reversed(2, [66, 43, 75, 89, 47])