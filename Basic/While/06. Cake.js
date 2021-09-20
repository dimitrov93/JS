function cake(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let size = w * l;
    let index = 2;
    let cakes = input[index];
    let count = 0;

    while (cake !== `STOP`) {
        count+= Number(cakes);
        index++;
        if (count > size) {
            console.log(`No more cake left! You need ${Math.abs(size - count)} pieces more.`);
            break;
        }
        cakes = input[index];

        if (cakes == `STOP`) {
            console.log(`${size - count} pieces are left.`);
            break;
        }
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

