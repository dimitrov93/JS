function sort(a,b,c) {
    let counter = 0;
    let d = 0;

    while (counter != 3) {
       if (b > a) {
           d = a;
           a = b;
           b = d;
           counter++;
       } else if (c > a) {
           d = a;
           a = c;
           c = d;
           counter++;
       } else if (c > b) {
           d = b;
           b = c;
           c = d;
           counter++;
       } else {
           break;
       }
    }
    console.log(a);
    console.log(b);
    console.log(c);
}

sort(3,1,2)