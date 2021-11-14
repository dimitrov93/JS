function convertToJson(name,lastName,hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    }

    console.log(JSON.stringify(obj));
}

convertToJson('George', 'Jones', 'Brown')
convertToJson('Peter', 'Smith', 'Blond')