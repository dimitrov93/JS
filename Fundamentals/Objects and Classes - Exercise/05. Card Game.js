function solve(arr) {
    let obj = {
    }

    for (let line of arr) {
        let currentLine = line.split(": ");
        let name = currentLine.shift();
        let number = currentLine.shift().split(", ");
        let totalSum = 0;
        let firstWord = number.shift();
        while (number.length >= 0) {
            if (number.includes(firstWord)) {
                continue;
            } else {
                    let sum = 0;
                    let firstChar = firstWord[0];
                    let a = 0
                    if (firstChar === "J") {
                        a = 11;
                    } else if (firstChar === "Q") {
                        a = 12
                    } else if (firstChar === "K") {
                        a = 13
                    } else if (firstChar === "A") {
                        a = 14
                    } else {
                        a= +firstWord[0];
                    }
        
                    let secondChar = firstWord[1];
                    let b = 0;
                    if (secondChar === "S") {
                        b = 4;
                    } else if (secondChar === "H") {
                        b = 3;
                    } else if (secondChar === "D") {
                        b = 2;
                    } else if (secondChar === "C") {
                        b = 1;
                    }
                    sum = a * b;
                    totalSum += sum;
                
            }
            firstWord = number.shift();
        }
        if (obj[name] > 0) {
            obj[name] += totalSum
        } else {
            obj[name] = totalSum
        }
      
    }



console.log(obj);
}


solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)

    //(S -> 4, H-> 3, D -> 2, C -> 1).
    // (J, Q, K, A) 

    // 2, 12, 27, 56, 48 = 145 + 