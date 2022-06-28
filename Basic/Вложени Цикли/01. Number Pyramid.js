function numberPyramid(input) {
    let number = Number(input[0]);
    let currect = 1;
    let isBigger = false;
    let printCurentLine = "";

    for (let i = 1; i <= number; i++) {
        for (let b = 0; b < i; b++) {
            if (currect > number) {
                isBigger = true;
                break;
            }
            printCurentLine += currect + " ";
            currect++;
        }        
        console.log(printCurentLine);
        printCurentLine = "";
        if (isBigger) {
            break;
        }
    }
}

numberPyramid(["15"])