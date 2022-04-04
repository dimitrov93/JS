function solve(input) {
        let blq = input.shift().split("| ").join("").split(" |").join("").split(" ")
        let obj = {

        }
    
        let arr = []
        const regex = new RegExp(/\s*\|\s*/);

    for (const line of input) {
        let [Town, Latitude, Longitude] = line.split(regex).filter(Boolean);

        Longitude = Number(Longitude).toFixed(2);
        Latitude = Number(Latitude).toFixed(2);

        Longitude = Number(Longitude);
        Latitude = Number(Latitude);
        

        if (!obj.hasOwnProperty(Town)) {
            obj = {
                Town,
                Latitude,
                Longitude
            }
        }
        arr.push(obj)
    }

    arr = JSON.stringify(arr);
    console.log(arr);
}

solve(
    ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']    
)