function pointsValidation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    let firstCalc = (x1,y1) => {
        let x2 = 0;
        let y2= 0;
        let formula = Math.sqrt(Math.pow(-x1 + x2,2) + Math.pow(-y1 + y2,2));

        if (formula % 1 === 0) {
            return `{${x1}, ${y1}} to {0, 0} is valid`;
        } else {
            return `{${x1}, ${y1}} to {0, 0} is invalid`;
        }
    }

    let secondCalc = (x2,y2) => {
        let x1 = 0;
        let y1 = 0;
        let formula = Math.sqrt(Math.pow(-x1 + x2,2) + Math.pow(-y1 + y2,2));
        if (formula % 1 === 0) {
            return `{${x2}, ${y2}} to {0, 0} is valid`;
        } else {
            return `{${x2}, ${y2}} to {0, 0} is invalid`;
        }
    }

    let thirdCalc = (x1,y1,x2,y2) => {
        let formula = Math.sqrt(Math.pow(-x1 + x2,2) + Math.pow(-y1 + y2,2));
        if (formula % 1 === 0) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        } else {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
        }
    }

    console.log(firstCalc(x1,y1));
    console.log(secondCalc(x2,y2));
    console.log(thirdCalc(x1,y1,x2,y2));

}

pointsValidation([2, 1, 1, 1])



//{x1, y1} to {0, 0}
//{x2, y2} to {0, 0}
//{x1, y1} to {x2, y2}
