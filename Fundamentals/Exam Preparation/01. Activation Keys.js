function solve(input) {
    input.pop();
    let key = input.shift();

    for (let line of input) {
        let currentLine = line.split(">>>");
        let command = currentLine[0];

        if (command === "Slice") {
            let start = +currentLine[1];
            let end = +currentLine[2];

            let startAfter = key.slice(0,start)
            let endAfter = key.slice(end);
            key = startAfter + endAfter
            console.log(key);
        } else if (command === "Flip") {
            let side = currentLine[1];
            let start = +currentLine[2];
            let end = +currentLine[3];

            let after1 = key.slice(0, start)
            let after2 = key.slice(end)
            let mid = key.substring(start,end)

            if (side === "Upper") {
                mid = mid.toUpperCase();
            } else if (side === "Lower") {
                mid = mid.toLowerCase();
            }
            key = after1 + mid + after2;
            console.log(key);
        } else if (command === "Contains") {
            let word = currentLine[1];
            if (key.includes(word)) {
                console.log(`${key} contains ${word}`);
            } else{
                console.log(`Substring not found!`);
            }
        }
    }
    console.log(`Your activation key is: ${key}`);
}

solve(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

