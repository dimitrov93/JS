function matrix(n) {

    let makeArray = (n) => {
        let number = n;
        let emptyArr = [];
    
        for (let i = 0; i < n; i++) {
            emptyArr.push(number);
        }
        let newnum = emptyArr.join(' ');
        return newnum;
    }

    for (let i = 0; i < n; i++) {
        console.log(makeArray(n));
    }
}

matrix(3)