function solve(arr) {
    let index = 0;
    let emptyArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            index++;
            emptyArr.push(index);
        } else {
            emptyArr.pop();
            index++;
        }
    }

    if (emptyArr.length > 0) {
        console.log(emptyArr.join(" "));
    } else {
        console.log("Empty");
    }
}

solve(['add', 'add', 'add', 'add'])
solve(['add', 'add', 'remove', 'add', 'add'])
solve(['remove', 'remove', 'remove'])