function solve(arr) {
    let word = arr.split("\\").pop().split(".")
    let extension = word.pop()
    console.log(`File name: ${word.join(".")}`);
    console.log(`File extension: ${extension}`);
}

solve('C:\\Projects\\Data-Structures\\LinkedList.cs')