function smallestOfThree(a,b,c) {
    let number = 0;
    let firstN = (a,b) => Math.min(a,b);
    let secondN = (b,c) => Math.min(b,c);

    number = Math.min(firstN(a,b),secondN(b,c));
    console.log(number);
}

smallestOfThree(2,5,3)