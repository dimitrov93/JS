function solve(string, word) {
    let emptyStr = string.split(" ");
    let count = 0;

    for (const iterator of emptyStr) {
        if (iterator === word) {
            count++;
        }
    }

    console.log(count);
}

solve('This is a word and it also is a sentence','is')