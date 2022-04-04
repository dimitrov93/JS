<<<<<<< HEAD
function negativeOrPossitive(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.unshift(arr[i]);
        } else {
            newArr.push(arr[i])
        }
    }

    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i]);        
    }

}

=======
function negativeOrPossitive(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.unshift(arr[i]);
        } else {
            newArr.push(arr[i])
        }
    }

    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i]);        
    }

}

>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
negativeOrPossitive(['7', '-2', '8', '9'])