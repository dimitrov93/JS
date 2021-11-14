function employees(arr) {
    let employe;
    for (let line of arr) {
        let name = line;
        let currentLenght = line.length;

        employe = {
            name,
            currentLenght
        }
        console.log(`Name: ${employe.name} -- Personal Number: ${employe.currentLenght}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )