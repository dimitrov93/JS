function triangles(num) {
    let print = " ";
    
    for (let i = 1; i <= num; i++) {
        for (let a = 1; a <= i; a++) {
            print += i + " ";
        }
        console.log(print);
        print = " ";
    }
}

triangles(3)