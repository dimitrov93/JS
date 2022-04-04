function solve(input) {
    let thePass = input.shift();
    input.pop();

    for (let line of input) {
        let current = line.split(" ");
        let command = current[0];
        
        if (command === "Replace") {
            let theChar = current[1];

            if (thePass.includes(theChar)) {
                let char = current[1].charCodeAt();
                let value = Number(current[2]);
                let sum = Number(char + value);
                let final = String.fromCharCode(sum)
                
                if (thePass.includes(theChar)) {
                    while (thePass.includes(theChar)) {
                        thePass = thePass.replace(theChar, final)
                    }
                }
    
                console.log(thePass);
            }

        } else if (command === "Make") {
            let command2 = current[1];
            let index = Number(current[2]);
            if (command2 === "Upper") {
                let slice1 = thePass.slice(0,index);
                let slice2 = thePass.slice(index,index+1).toUpperCase()
                let slice3 = thePass.slice(index+1)
                thePass = slice1 + slice2 + slice3;
                console.log(thePass);
            } else if (command2 === "Lower") {
                let slice1 = thePass.slice(0,index);
                let slice2 = thePass.slice(index,index+1).toLowerCase()
                let slice3 = thePass.slice(index+1)
                thePass = slice1 + slice2 + slice3;
                console.log(thePass);
            }
        } else if (command === "Validation") {

            if (thePass.length < 8) {
                console.log(`Password must be at least 8 characters long!`);
            }

            if (thePass.match(/\w+/) === null) {
                console.log(`Password must consist only of letters, digits and _!`);
            }
            if(/[A-Z]/.test(thePass) === false) {
                console.log('Password must consist at least one uppercase letter!')
            }
            if(/[a-z]/.test(thePass) === false) {
                console.log('Password must consist at least one lowercase letter!')
            }
            if(/[0-9]/.test(thePass) === false) {
                console.log('Password must consist at least one digit!')
            }
        } else if (command === "Insert") {
            let index = Number(current[1]);
            let char = current[2];

            if (thePass.length > index) {
                let slice1 = thePass.slice(0,index) + char + thePass.slice(index)
                thePass = slice1;
                console.log(thePass);
            }
        }
    }
}

solve(['123456789',
'Insert 3 R',
'Replace 5 15',
'Validation',
'Make Lower 3',
'Complete'])

