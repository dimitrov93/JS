function charsInRange(first,second) {
    let firstN = first.charCodeAt(0);
    let secondN = second.charCodeAt(0);
    let start = Math.min(firstN,secondN);
    let end = Math.max(firstN,secondN);
    let Str = "";

    for (let i = start + 1; i < end; i++) {
        result = String.fromCharCode(i);
        Str += result + " ";
    }
    console.log(Str);
}

charsInRange('#',
':'
)