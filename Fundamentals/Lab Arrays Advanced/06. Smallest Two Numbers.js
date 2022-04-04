<<<<<<< HEAD
function smallest(arr) {
    let sortArr = arr.sort((a,b) => { return a - b} )
    let newArr = sortArr.slice(0,2);
    console.log(newArr.join(" "));
}
=======
function smallest(arr) {
    let sortArr = arr.sort((a,b) => { return a - b} )
    let newArr = sortArr.slice(0,2);
    console.log(newArr.join(" "));
}
>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
smallest( [30, 15, 50, 5] )