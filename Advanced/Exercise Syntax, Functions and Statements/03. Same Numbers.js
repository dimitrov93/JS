function solve(input) {
    let n = input.toString();
    let flag = true;
    let sum = 0;

    for (let i = 1; i < n.length; i++) {
        let firstN = Number(n[i-1]);
        let secondN = Number(n[i]);
        
        if (firstN !== secondN) {
            flag = false;
        }
    }

    for (let i = 0; i < n.length; i++) {
        sum += Number(n[i]);
    }

    if (flag) {
        console.log(flag);
        console.log(sum);
    } else {
        console.log(flag);
        console.log(sum);
    }
    
}

solve(2222222)