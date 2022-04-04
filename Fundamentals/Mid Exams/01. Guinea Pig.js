<<<<<<< HEAD
function solve(arr) {
    let foodQuantity = +arr.shift();
    let hayQuantity = +arr.shift();
    let coverQuantity = +arr.shift();
    let pigWeight = +arr.shift();
    let day = 1;

    while (day <= 30) {
        foodQuantity -= 0.3;
        if (day % 3 === 0) {
            let cover = pigWeight * (1/3);
            coverQuantity -= cover;
        }  
        
        if (day % 2 === 0) {
            let hay = foodQuantity * (5/100)
            hayQuantity -= hay
        }  

        if (foodQuantity <= 0 || hayQuantity  <= 0 || coverQuantity  <= 0) {
            break;
        }

        day++;
    }


     if (foodQuantity > 0 && hayQuantity >0 && coverQuantity>0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodQuantity.toFixed(2)}, Hay: ${hayQuantity.toFixed(2)}, Cover: ${coverQuantity.toFixed(2)}.`);
        } else if (foodQuantity < 0 || hayQuantity  < 0 || coverQuantity  < 0) {
            console.log(`Merry must go to the pet store!`);
        }

    

}

solve(["9",
"5",
"5.2",
"1"])






=======
function solve(arr) {
    let foodQuantity = +arr.shift();
    let hayQuantity = +arr.shift();
    let coverQuantity = +arr.shift();
    let pigWeight = +arr.shift();
    let day = 1;

    while (day <= 30) {
        foodQuantity -= 0.3;
        if (day % 3 === 0) {
            let cover = pigWeight * (1/3);
            coverQuantity -= cover;
        }  
        
        if (day % 2 === 0) {
            let hay = foodQuantity * (5/100)
            hayQuantity -= hay
        }  

        if (foodQuantity <= 0 || hayQuantity  <= 0 || coverQuantity  <= 0) {
            break;
        }

        day++;
    }


     if (foodQuantity > 0 && hayQuantity >0 && coverQuantity>0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodQuantity.toFixed(2)}, Hay: ${hayQuantity.toFixed(2)}, Cover: ${coverQuantity.toFixed(2)}.`);
        } else if (foodQuantity < 0 || hayQuantity  < 0 || coverQuantity  < 0) {
            console.log(`Merry must go to the pet store!`);
        }

    

}

solve(["9",
"5",
"5.2",
"1"])






>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
