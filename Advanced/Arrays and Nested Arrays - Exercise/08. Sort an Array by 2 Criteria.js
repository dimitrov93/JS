function solve(input) {
    
    let sorted = input.sort((a,b) => {
        return  a.length - b.length || a.localeCompare(b); 
    })

    for (const line of sorted) {
        console.log(line);
    }
}

solve(
    ['test', 
    'Deny', 
    'omen', 
    'Default']
    
    
    
    
    
)