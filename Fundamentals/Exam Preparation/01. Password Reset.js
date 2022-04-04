function solve(input) {
    input.pop();
    let text = input.shift()

    for (let line of input) {
        let command = line.split(" ");

        if (command[0] === "TakeOdd") {
            let newText = "";
            for (let i = 0; i < text.length; i++) {
                if (i % 2 !== 0) {
                    let element = text[i];
                    newText += element
                } 
            }
            text = newText;
            console.log(text);
        } else if (command[0] === "Cut") {
            let index = +command[1];
            let length = +command[2];
            let firstPart = text.substring(0,index)
            let secondPart = text.substring(index+length)
            text = firstPart + secondPart;
            console.log(text);
        } else if (command[0] === "Substitute") {
            let ind1 = command[1];
            let ind2 = command[2];
            if (text.includes(ind1)) {
                while (text.includes(ind1)) {
                    text = text.replace(ind1,ind2)
                }
                console.log(text);
            } else {
                console.log(`Nothing to replace!`);
            }
        }
    }

    console.log(`Your password is: ${text}`);

}

solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

