function solve(arr) {
    let steps = Number(arr[arr.length - 1]);
    let emptyArr = [];

    for (let i = 0; i <= arr.length - 2; i+= steps) {
        emptyArr.push((arr[i]));
    }
    console.log(emptyArr.join(" "));
}

solve(['5', '20', '31', '4', '20', '2'])
solve(['dsa', 'asd', 'test', 'test', '2'])
solve(['1', '2', '3', '4', '5', '6'])