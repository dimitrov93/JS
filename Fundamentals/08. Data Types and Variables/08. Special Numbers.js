<<<<<<< HEAD
function specialNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let a = parseInt(i / 10);
        let b = i % 10;
        if (a + b == 5 || a + b == 7 || a + b == 11 ) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

=======
function specialNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let a = parseInt(i / 10);
        let b = i % 10;
        if (a + b == 5 || a + b == 7 || a + b == 11 ) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
specialNumber(20)