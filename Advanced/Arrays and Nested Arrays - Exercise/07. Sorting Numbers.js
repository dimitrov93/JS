function solve(arr) {
    arr.sort((a,b) => {
        return a-b;
    })

    let empty = [];
    while (arr.length > 0) {
        let first = arr.shift();
        let second = arr.pop();

        empty.push(first);
        empty.push(second)
    }

    return empty;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])