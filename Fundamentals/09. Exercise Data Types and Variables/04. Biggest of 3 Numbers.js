<<<<<<< HEAD
function biggestOf3(a,b,c) {
    let d = 0;
    if (b < c) {
        d = c;
        c = b;
        b = d;
    }  
    
    if (a < b) {
        d = b;
        b = a;
        a = d;
    }  
    
    if (a < c) {
        d = c;
        c = a;
        a = d;
    }

    console.log(a);
    
}

biggestOf3(5,-2,7)
=======
function biggestOf3(a,b,c) {
    let d = 0;
    if (b < c) {
        d = c;
        c = b;
        b = d;
    }  
    
    if (a < b) {
        d = b;
        b = a;
        a = d;
    }  
    
    if (a < c) {
        d = c;
        c = a;
        a = d;
    }

    console.log(a);
    
}

biggestOf3(5,-2,7)
>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
