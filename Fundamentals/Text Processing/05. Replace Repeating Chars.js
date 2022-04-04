function solve(arr) {
    let result = '';
    for (let char of arr) {
        if (char !== result[result.length - 1]) {
            result += char
        }
    }
    console.log(result);
}
solve('qqqwerqwecccwd')