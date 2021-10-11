function solve(arr,n) {
    let newArr = arr;


    for (let i = 0; i < n; i++) {
        let numberToMove = arr.shift();
        newArr.push(numberToMove);

  
    }
    console.log(newArr.join(" "));
}
solve([51, 47, 32, 61, 21], 2)