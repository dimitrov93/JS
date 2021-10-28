function smallest(arr) {
    let sortArr = arr.sort((a,b) => { return a - b} )
    let newArr = sortArr.slice(0,2);
    console.log(newArr.join(" "));
}
smallest( [30, 15, 50, 5] )