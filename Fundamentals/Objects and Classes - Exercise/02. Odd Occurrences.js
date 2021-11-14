function solve(input) {
    let arr = input.toLowerCase().split(" ");
    let map = new Map();

//    for (let word of arr) {
//        if (obj.hasOwnProperty(word)) {
//            obj[word]+=1
//        } else {
//            obj[word] = 1
//        }
//    }
//    let emptyArr = [];
//    for (let key in obj) {
//        if (obj[key] % 2 !== 0) {
//            emptyArr.push(key)
//        }
//    }
//
//    console.log(emptyArr.join(" "));


    for (let word of arr) {
        let num = 0;
        if (map.has(word)) {
            let number = map.get(word);
            map.set(word,number+1)
        } else {
            map.set(word,num+1)
        }
    }
    let emptyArr = []
    let entries = Array.from(map);
    for (let line of entries) {
        let num = line[1];
        if (line[1] % 2 !==0) {
            emptyArr.push(line[0])
        }
    }
    console.log(emptyArr.join(" "));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')