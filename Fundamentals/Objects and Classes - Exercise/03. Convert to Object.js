function convert(text) {
    let obj = JSON.parse(text);
    let theObj = Object.entries(obj);
    for (let [key,value] of theObj) {
        console.log(`${key}: ${value}`);
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}')