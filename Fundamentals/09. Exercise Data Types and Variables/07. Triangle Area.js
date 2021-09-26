function trinagleArea(a,b,c) {
    let S = (a+b+c)/2;
    let A = S - a;
    let B = S - b;
    let C = S - c;
    let Area = Math.sqrt(S*A*B*C);

    console.log(Area);
}

trinagleArea(2,3.5,4)