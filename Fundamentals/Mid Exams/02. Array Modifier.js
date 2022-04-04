<<<<<<< HEAD
function solve(arr) {
    let arrayValues = arr.shift().split(" ").map(Number);
    arr.pop();

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].split(" ");
        let command = element[0];
        let index1 = +element[1];
        let index2 = +element[2];
        
        if (command === "swap") {
            let num1 = arrayValues[index1];
            let num2 = arrayValues[index2];
            arrayValues[index1] = num2;
            arrayValues[index2] = num1;
        } else if (command === "multiply") {
            let num1 = arrayValues[index1];
            let num2 = arrayValues[index2];
            arrayValues[index1] = num2 * num1;

        } else if (command === "decrease") {
            for (let i = 0; i < arrayValues.length; i++) {
                arrayValues[i] = arrayValues[i] - 1
            }
        }
    }

    console.log(arrayValues.join(", "));
}
solve( [
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
=======
function solve(arr) {
    let arrayValues = arr.shift().split(" ").map(Number);
    arr.pop();

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].split(" ");
        let command = element[0];
        let index1 = +element[1];
        let index2 = +element[2];
        
        if (command === "swap") {
            let num1 = arrayValues[index1];
            let num2 = arrayValues[index2];
            arrayValues[index1] = num2;
            arrayValues[index2] = num1;
        } else if (command === "multiply") {
            let num1 = arrayValues[index1];
            let num2 = arrayValues[index2];
            arrayValues[index1] = num2 * num1;

        } else if (command === "decrease") {
            for (let i = 0; i < arrayValues.length; i++) {
                arrayValues[i] = arrayValues[i] - 1
            }
        }
    }

    console.log(arrayValues.join(", "));
}
solve( [
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
  )