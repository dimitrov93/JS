function solve(input) {
    // 0896 716 303
    input.pop()
    let command = input.shift();

    for (let line of input) {
        let current = line.split("|")
        
        if (current[0] === "ChangeAll") {
            let first = current[1];
            let second = current[2];
            while (command.includes(first)) {
                command = command.replace(first,second)
            }
        } else if (current[0] === "Insert") {
            let index = +current[1];
            let value = current[2]

            let firstSlice = command.slice(0,index);
            let secondSlice = command.slice(index);
            command = firstSlice + value  + secondSlice;
        } else if (current[0] === "Move") {
            let num = +current[1];
            let firstSlice = command.slice(0,num);
            let secondSlice = command.slice(num);
            
            command = secondSlice + firstSlice;
        }
    }

    console.log(`The decrypted message is: ${command}`);
}

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]
  )