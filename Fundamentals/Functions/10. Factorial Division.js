function factorial(a,b) {
    let firstN = a;
    let secondN = b;

    function factFirst(firstN) {
        let sum = 1;
        for (let i = firstN; i >= 1; i--) {
            sum *= i;
        }
        return sum;
    }

    function factSecond(secondN) {
        let sum = 1;
        for (let i = secondN; i >= 1; i--) {
            sum *= i;
        }
        return sum;
    }

    console.log((factFirst(firstN) / factSecond(secondN)).toFixed(2) );
}

factorial(5,2)
factorial(6,2)