function solve(input) {
    let stops = input.shift();

    input.pop();

    for (let line of input) {
        let current = line.split(":").join(" ").split(" ");
        let command = current.shift();

        if (command === "Add") {
            let index = +current[1];
            let str = current[2];

            if (stops.indexOf(index)) {
                let first = stops.slice(0, index);
                let second = stops.slice(index);
                stops = first + str + second
            } 
            console.log(stops);
        } else if (command === "Remove") {
            let startIndex = +current[1];
            let endindex = +current[2];

            if (startIndex >= 0 && startIndex < stops.length && endindex >= 0 && endindex < stops.length &&
				startIndex <= endindex) {
                let first = stops.slice(0, startIndex)
                let second = stops.slice(endindex + 1)
                stops = first + second;
            }
            console.log(stops);

        } else if (command === "Switch") {
            let oldStr = current[0];
            let newStr = current[1];

            if (stops.includes(oldStr) && oldStr !== newStr) {
			 let splitted = stops.split(oldStr);
             stops = splitted.join(newStr)
            // let regEx = new RegExp(oldString, "g");
			// str = str.replace(regEx, newString);
            } 
            console.log(stops);
        }
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

solve(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])

