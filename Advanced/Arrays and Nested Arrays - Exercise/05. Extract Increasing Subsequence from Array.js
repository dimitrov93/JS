function solve(array) {
    let result = array.reduce((arr, current) => {
        if (arr.length) {
            if (current >= arr[arr.length - 1]) {
                arr.push(current);
            }
        } else {
            arr.push(current);
        }
        return arr;
    }, []);
    return result;
}
solve(
    [20, 
        3, 
        2, 
        15,
        6, 
        1]
        
        
        
)