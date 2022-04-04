function solve(text,n) {
    let empty = [];
    for (let i = 0; i < text.length; i+=n) {
        empty.push(text[i])
    }

    return empty
}

solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
)