function solve(input) {
    let sort = input.sort((a,b) => {
        return a.localeCompare(b)
    })

    for (let i = 0; i < sort.length; i++) {
        const element = sort[i];
        console.log(`${i+1}.${element}`);
    }
}

solve(
    ["John", "Bob", "Christina", "Ema"]
)