function solve(string, word) {

    while (string.includes(word)) {
        string = string.replace(word, '*'.repeat(word.length))
    }

    console.log(string);
}

solve('A small sentence with some words', 'small')
solve('Find the hidden word', 'hidden')