function solve(x1,y1,x2,y2) {

    
    firstFormula();

    secondFormula();

    let formulaX = (x2 - x1) * (x2 - x1);
    let formulaY = (y2 - y1) * (y2 - y1);
    let thirdFormula = Math.sqrt(formulaX + formulaY);
    if (Number.isInteger(thirdFormula)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }


    function secondFormula() {
        let formulaX = (x2 - 0) * (x2 - 0);
        let formulaY = (y2 - 0) * (y2 - 0);
        let secondFormula = Math.sqrt(formulaX + formulaY);
        if (Number.isInteger(secondFormula)) {
            console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
        } else {
            console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
        }
    }

    function firstFormula() {
        let formulaX = (0 - x1) * (0 - x1);
        let formulaY = (0 - y1) * (0 - y1);
        let firstFormula = Math.sqrt(formulaX + formulaY);
        if (Number.isInteger(firstFormula)) {
            console.log(`{${x1}, ${y1}} to {0, 0} is valid `);
        } else {
            console.log(`{${x1}, ${y1}} to {0, 0} is invalid `);
        }
    }
}

solve(2, 1, 1, 1)