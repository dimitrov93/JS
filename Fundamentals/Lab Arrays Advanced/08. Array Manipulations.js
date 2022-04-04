<<<<<<< HEAD
function arrayManipulations(arr) {
    let theArr = arr.shift().split(" ");

    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i].split(" ")
        let command = currentEl[0];
        let number = currentEl[1];        
        switch (command) {
            case "Add": theArr.push(number); break;
            case "Remove": 
                theArr = theArr.filter(el => el !== number)
                break;

            default:
                break;
        }
    }
}

arrayManipulations( 
['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
=======
function arrayManipulations(arr) {
    let theArr = arr.shift().split(" ");

    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i].split(" ")
        let command = currentEl[0];
        let number = currentEl[1];        
        switch (command) {
            case "Add": theArr.push(number); break;
            case "Remove": 
                theArr = theArr.filter(el => el !== number)
                break;

            default:
                break;
        }
    }
}

arrayManipulations( 
['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
)