function moving(arr) {
    let targets = arr.shift().split(" ").map(Number);
    arr.pop();
    let targetsLength = targets.length;

    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i].split(" ");
        let command = currentEl.shift();
        let index = +currentEl.shift();
        let value = +currentEl.shift();

        if (command === "Shoot") {
            if (index >=0 && index < targetsLength) {
                targets[index] = targets[index] - value;
                if (targets[index] <= 0) {
                    targets.splice(index,1);
                } 
            }
        } else if (command === "Add") {
            if (index >=0 && index < targetsLength) {
                targets.splice(index,0,value)
            } else {
                console.log(`Invalid placement!`);
            }
        } else if (command === "Strike") {
            if (index + value <= targets.length - 1 && index - value >= 0) {
                targets.splice(index - value, value * 2 + 1);
            } else {
                console.log(`Strike missed!`);
            }
        }
    }
    console.log(targets.join("|"));
}

moving(["1 2 3 4 5",
"Strike 0 1",
"End"])



