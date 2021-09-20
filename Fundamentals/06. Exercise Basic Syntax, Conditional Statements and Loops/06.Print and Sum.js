function pns(start,end) {
    let result = 0;
    let print = "";

    for (let i = start; i <= end; i++) {
        print += i + " ";
        result += i;
    }
    console.log(print);
    console.log(`Sum: ${result}`);
}

pns(5, 10)