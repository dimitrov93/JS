function rounding(num, r) {
    if (r > 15) {
        r = 15;
    }
    num = num.toFixed(r);
    num = parseFloat(num)
    console.log(num);
}

rounding(3.1415926535897932384626433832795,2)