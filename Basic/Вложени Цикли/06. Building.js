function building(input) {
    let r = Number(input[0]);  //  nadolu
    let c = Number(input[1]);  //   dqsno
    let empty = "";

    for (let i = r; i >= 1; i--) {
        for (let a = 0; a < c; a++) {
            if (i === r) {
                empty += `L${i}${a} `;
            } else if (i % 2 === 0) {
                empty += `O${i}${a} `;
            } else {
                empty += `A${i}${a} `;
            }
        }
        console.log(empty);
        empty = "";
    }
}

building(["9", "5"])
