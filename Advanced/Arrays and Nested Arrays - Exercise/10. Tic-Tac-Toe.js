function solve(input) {

    let round = 0;
    let flag = false;

    let desk = (
        [[false, false, false],
        [false, false, false],
        [false, false, false]]
        )

    let deskLength = input.length    
 
    loop: while (input.length > 0) {
        let current = input.shift().split(" ")
        let x = current[0];
        let y = current[1];

        if (round % 2 === 0) {
            if (desk[x][y] === false) {
                desk[x][y] = "X";
            } else {
                console.log(`This place is already taken. Please choose another!`);
                continue;
            }
        } else {
            if (desk[x][y] === false) {
                desk[x][y] = "O";
            } else {
                console.log(`This place is already taken. Please choose another!`);
                continue;
            }
        }

        round++;

        for (let i = 0; i < desk.length; i++) {
            let emptyRow = "";
            let emptyCell = "";
            let emptyDiagonal1 = "";
            let emptyDiagonal2 = "";

            for (let j = 0; j < desk.length; j++) {
                emptyRow += desk[i][j];
            }

            if (emptyRow === "XXX") {
                console.log("Player X wins!");
                flag = true;
                break loop;
            } else if (emptyRow === "OOO") {
                console.log("Player O wins!");
                flag = true;
                break loop;
            }

            for (let h = 0; h < desk.length; h++) {
                emptyCell += desk[h][i];
            }

            if (emptyCell === "XXX") {
                console.log("Player X wins!");
                flag = true;
                break loop;

            } else if (emptyCell === "OOO") {
                console.log("Player O wins!");
                flag = true;
                break loop;
            }

            for (let f = 0; f < desk.length; f++) {
                emptyDiagonal1 += desk[f][f];
            }
            
            if (emptyDiagonal1 === "XXX") {
                console.log("Player X wins!");
                flag = true;
                break loop;
            } else if (emptyDiagonal1 === "OOO") {
                console.log("Player O wins!");
                flag = true;
                break loop;
            }
            

            for (let z = desk.length; z > 0; z--) {
                emptyDiagonal2 += desk[z-1][z-1];
            }

            if (emptyDiagonal2 === "XXX") {
                console.log("Player X wins!");
                flag = true;
                break loop;
            } else if (emptyDiagonal2 === "OOO") {
                console.log("Player O wins!");
                flag = true;
                break loop;
            }
        }

    }

    if (flag) {
        for (const line of desk) {
            console.log(line.join("\t"));
        }
    } else {
        console.log(`The game ended! Nobody wins :(`);
        for (const line of desk) {
            console.log(line.join("\t"));
        }
    }



}

solve(
    ["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]   
)