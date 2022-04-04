function solve(arr) {
    let arrSplit = arr.split(" ");
    let emptyArr = [];
    for (let word of arrSplit) {
        if (word[0] === '#' && word.length > 1) {
            word = word.substring(1);
            emptyArr.push(word)
        }
    }

    let final = [];
    
    for (let word of emptyArr) {
        let array = word.split('');
        let flag = true;

        for (let i = 0; i < array.length; i++) {
            let currentEl = array[i].charCodeAt(0);

            if ((currentEl < 97 || currentEl > 120) &&
            (currentEl < 65 || currentEl > 90)) {
                flag = false;
            }
            
        }

        if (flag) {
            final.push(word)
        }
    }

    final.forEach(element => {
        console.log(element);
    });
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')