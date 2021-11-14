function solve(arr) {
    let words = arr.shift().split(" ");
    let theWords = {};
    
    for (let word of words) {
        theWords[word] = 0;
    }

    for (let word of arr) {
        if (theWords.hasOwnProperty(word)) {
            theWords[word] ++;
        }
    }

    let sorted = Object.entries(theWords).sort((a,b) => b[1] - a[1]);

    for (let line of sorted) {
        console.log(`${line[0]} - ${line[1]}`);
    }
}

solve(
    [
        'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
        ,'words','this','and','sentence','because','this','is','your','task'
        ]
        
)