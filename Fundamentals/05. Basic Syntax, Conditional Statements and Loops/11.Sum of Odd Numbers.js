function summ(n) {

    let m = 1;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        console.log(m);
        sum+=m;
        m = m + 2;
    }
    console.log(`Sum: ${sum}`);
}

summ(3)