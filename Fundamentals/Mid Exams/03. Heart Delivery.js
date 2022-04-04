<<<<<<< HEAD
function hearth(arr) {
    let hood = arr.shift().split("@").map(Number);
    let hoodLenghth = hood.length;
    arr.pop();
    let i = 0;
    let currentEl = arr[i].split(" ");
    let index = +currentEl.pop();

    while (true) {
        if (index >= hoodLenghth) {
            index = 0;
            continue;
        } 
            
        hood[index] = hood[index] - 2;
            if (hood[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`);
            } else if (hood[index] <= 0) {
                hood[index] = 0
                console.log(`Place ${index} already had Valentine's day.`);
            }
        
        i ++;
        if (i === arr.length) {
            break;
        }
        currentEl = arr[i].split(" ");
        index += +currentEl.pop();
    }
    console.log(`Cupid's last position was ${index}.`);
    let counter = 0;
    for (let i = 0; i < hood.length; i++) {
        let element = hood[i];
        if (element !== 0) {
            counter++
        }
    }

    if (counter === 0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${counter} places.`);
    }
}
hearth(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love! "])


=======
function hearth(arr) {
    let hood = arr.shift().split("@").map(Number);
    let hoodLenghth = hood.length;
    arr.pop();
    let i = 0;
    let currentEl = arr[i].split(" ");
    let index = +currentEl.pop();

    while (true) {
        if (index >= hoodLenghth) {
            index = 0;
            continue;
        } 
            
        hood[index] = hood[index] - 2;
            if (hood[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`);
            } else if (hood[index] <= 0) {
                hood[index] = 0
                console.log(`Place ${index} already had Valentine's day.`);
            }
        
        i ++;
        if (i === arr.length) {
            break;
        }
        currentEl = arr[i].split(" ");
        index += +currentEl.pop();
    }
    console.log(`Cupid's last position was ${index}.`);
    let counter = 0;
    for (let i = 0; i < hood.length; i++) {
        let element = hood[i];
        if (element !== 0) {
            counter++
        }
    }

    if (counter === 0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${counter} places.`);
    }
}
hearth(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love! "])


>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
