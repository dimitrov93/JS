function solve(array) {
    let obj = {};

    for (let i = 0; i < array.length; i+=2) {
        let name = array[i];
        let calories = Number(array[i+1])
        
        if (!obj.hasOwnProperty(name)) {
            obj[name] = calories
        }
    }
    
    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])