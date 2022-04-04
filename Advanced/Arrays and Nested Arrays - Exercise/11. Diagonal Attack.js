function solve(input) {
    let empty = [];
    let diagonal1 = 0;
    let diagonal2 = 0;

    for (const line of input) {
        let current = line.split(" ").map(Number);
        empty.push(current)
    }
   
    for (let i = 0; i < empty.length; i++) {
        const element = empty[i][i];
        diagonal1 += Number(element)
    }

    for (let j = empty.length; j > 0; j--) {
        const element = empty[j-1][j-1];
        diagonal2 += Number(element)

    }

    if (diagonal1 === diagonal2) {
        
        for (let i = 0; i < empty.length; i++) {
            for (let j = 0; j < empty.length; j++) {
                
                if ( (j !== empty.length - 1 - i) && (j !== i)) {
                    empty[i][j] = diagonal1;
                }
                
            }
            
        }
    }

    for (const line of empty) {
        console.log(line.join(" "));
    }
}

solve(

    ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']

)