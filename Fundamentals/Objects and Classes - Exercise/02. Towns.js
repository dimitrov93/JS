function towns(arr) {
    for (let line of arr) {
        let currentLine = line.split(" | ")
        let [town,latitude,longitude] = [currentLine[0], currentLine[1], currentLine[2]];

        let theTown = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }


        console.log(theTown);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)