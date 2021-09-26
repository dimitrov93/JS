function triplesOfLatin(n) {
    let num = Number(n);
    for (let i = 0; i < n; i++) {
        for (let a = 0; a < n; a++) {
            for (let b = 0; b < n; b++) {
                let letter1 = String.fromCharCode(97 + i)
                let letter2 = String.fromCharCode(97 + a)
                let letter3 = String.fromCharCode(97 + b)
                console.log(letter1 + letter2 + letter3);
            }
        }
    }
}
triplesOfLatin('3')