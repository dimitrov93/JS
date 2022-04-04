<<<<<<< HEAD
function solve(arr) {
    let firstE = +arr[0];
    let secondE = +arr[1];
    let thirdE = +arr[2];
    let peopleCount = +arr[3];

    let peoplePerHour = firstE + secondE + thirdE
    let hour = 0;
    let breaks = 0;


    while (peopleCount > 0) {
        peopleCount -= peoplePerHour;
            hour++
        if (hour % 4 ===0) {
            hour++;
        }
    }

    console.log(`Time needed: ${hour}h.`);
}

solve(['5','6','4','20'])
solve(['1','2','3','45'])
solve(['3','2','5','40'])
=======
function solve(arr) {
    let firstE = +arr[0];
    let secondE = +arr[1];
    let thirdE = +arr[2];
    let peopleCount = +arr[3];

    let peoplePerHour = firstE + secondE + thirdE
    let hour = 0;
    let breaks = 0;


    while (peopleCount > 0) {
        peopleCount -= peoplePerHour;
            hour++
        if (hour % 4 ===0) {
            hour++;
        }
    }

    console.log(`Time needed: ${hour}h.`);
}

solve(['5','6','4','20'])
solve(['1','2','3','45'])
solve(['3','2','5','40'])
>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
