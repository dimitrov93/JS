function coffe(arr) {
    let coffeList = arr.shift().split(" ");
    let NumberOfCommands = +arr.shift()
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(" ");
        let command = current.shift();

        if (command === "Include") {
            let theCoffe = current.shift();
            coffeList.push(theCoffe)
        } else if (command === "Remove") {
            let el = current.shift();
            let n = +current.shift();
            let arrLength = coffeList.length
            if (n > arrLength) {
                continue;
            }

            if (el === "first") {
                coffeList.splice(0,n);
            } else if (el === "last") {
                for (let i = 0; i < n; i++) {
                    coffeList.pop()
                }
            }
        } else if (command === "Prefer") {
            let index1 = +current.shift();
            let index2 = +current.shift();
            let first = coffeList[index1];
            let second = coffeList[index2]
            let arrLength = coffeList.length
            if (index1 >= 0 && index1 < arrLength && index2 >=0 && index2 < arrLength) {
                coffeList[index1] = second;
                coffeList[index2] = first;
            }
        } else if (command === "Reverse") {
            coffeList.reverse();
        }
    }

    console.log(`Coffees:`);
    console.log(coffeList.join(" "));
}

coffe(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
"3",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 4 1"])