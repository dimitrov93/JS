function solve(input) {
 
    let cap = input.shift();
    input.pop();
    let obj = {};
 
    for (let line of input) {
        let current = line.split("=");
        let command = current.shift();
 
        if (command === "Add") {
            let name = current[0];
            let sent = Number(current[1]);
            let received = Number(current[2]);
 
            if (!obj.hasOwnProperty(name)) {
                obj[name] = {
                    msgSent: 0,
                    msgReceived: 0,
                }
 
                obj[name].msgSent = sent;
                obj[name].msgReceived = received;
            }
        } else if (command === "Message") {
            let sender = current[0];
            let receiver = current[1];
 
            if (obj.hasOwnProperty(sender) && obj.hasOwnProperty(receiver)) {
                obj[sender].msgSent += 1;
                let sentNum1 =  obj[sender].msgSent;
                let receivedNum1 = obj[sender].msgReceived;
                if (sentNum1 + receivedNum1 >= cap) {
                    console.log(`${sender} reached the capacity!`);
                    delete obj[sender];
                }
 
                obj[receiver].msgReceived += 1;
                let sentNum2 =  obj[receiver].msgSent;
                let receivedNum2 = obj[receiver].msgReceived;
                if (sentNum2 + receivedNum2 >= cap) {
                    console.log(`${receiver} reached the capacity!`);
                    delete obj[receiver];
                }
 
            }
        } else if (command === "Empty") {
            let name = current[0];
            if (name === "All") {
                for (let line in obj) {
                    delete obj[line]
                }
            } else {
                delete obj[name];
            }
        }
    }
 
    let count = 0;
    for (let word in obj) {
        count++
    }
    console.log(`Users count: ${count}`);
 
    let notSorted = Object.entries(obj);
    let sorted = notSorted.sort((a,b) => {
        let sum1 = a[1].msgReceived;
        let sum2 = b[1].msgReceived;
 
        if (sum1 === sum2) {
            return a[0].localeCompare(b[0])
        } else {
            return sum2 - sum1
        }
        
    })

    for (let theName of sorted) {
        console.log(`${theName[0]} - ${theName[1].msgSent + theName[1].msgReceived}`);
    }
}

solve(["20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"])




