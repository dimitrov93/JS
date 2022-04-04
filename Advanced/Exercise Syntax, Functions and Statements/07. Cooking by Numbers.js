function solve(num,a,b,c,d,e) {
    let n = Number(num);
    let list = [a,b,c,d,e]

    for (const line of list) {
        if (line === 'chop') {
            console.log(n = n / 2);
        } else if (line === 'dice') {
            console.log(n = Math.sqrt(n));
        } else if (line === 'spice') {
            console.log(n = n+1);
        } else if (line === 'bake') {
            console.log(n = n * 3);
        } else if (line === 'fillet') {
            console.log(n = n - (n * 20/100));
        }
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')