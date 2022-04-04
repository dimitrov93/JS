function loadingBar(num) {
    let theNum = num;
    let emptyArr = []
    if (theNum <100 ) {
        emptyArr = ["[..........]"];
    } else {
        emptyArr = ["[%%%%%%%%%%]"];
    }

    for (let i = 0; i < theNum; i+=10) {
        if (theNum === 100) {
            break;
        }
        let index = 0;
        emptyArr[index] = emptyArr[index].replace('.','%');
        index++;
    }

    if (theNum < 100) {
        console.log(`${theNum}% ` + emptyArr);
        console.log(`Still loading...`);
    } else {
        console.log(`${theNum}% Complete!`);
        console.log(emptyArr);
    }
}

loadingBar(100)