function solve(input) {
    let num = 0;
    let empty = [];
    for (const command of input) {
        if (command === "add") {
            num += 1;
            empty.push(num)
        } else if (command === "remove") {
            num += 1;
            empty.pop();
        }
    }

    if (empty.length <= 0) {
        console.log("Empty");
    } else {
        for (const line of empty) {
            console.log(line);
        }
    }
}

solve(
    ['remove', 
    'remove', 
    'remove']
    

)