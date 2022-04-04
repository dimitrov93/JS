function solve(input) {

    let sum = input[0].reduce((a,b) => a+b)

    for (let i = 0; i < input.length; i++) {
        let currentSum = 0;

        for (let j = 0; j < input.length; j++) {
            currentSum += input[j][i];
        }
        
        if (currentSum !== sum) {
            return false;
        }
    }

    return true

}
solve(

    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   
   
)
