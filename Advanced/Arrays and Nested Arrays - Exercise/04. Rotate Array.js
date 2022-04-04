function solve(arr,n) {
    
    while (n !== 0) {
            let  element = arr.pop();
            arr.unshift(element)
        n--;
    }

    console.log(arr.join(" "));
}

solve(

    ['Banana', 
    'Orange', 
    'Coconut', 
    'Apple'], 
    15
    
    
)