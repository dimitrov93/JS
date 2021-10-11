function solve(arr) {
    let rotations = arr.pop();
    let newArr = arr;

    for (let i = 0; i < rotations; i++) {
        let numToMove = arr.pop();
        newArr.unshift(numToMove);
    }

    console.log(newArr.join(" ")); 
}

solve(['Banana', 'Orange', 'Coconut', 'Apple', '15'])

