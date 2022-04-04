<<<<<<< HEAD
function firstLastK(arr) {
    let n = arr.shift()
    let firstN = arr.slice(0,n)
    let lastN = arr.slice(arr.length - n, arr.length)

    console.log(firstN.join(" "));
    console.log(lastN.join(" "));
}

firstLastK( [2, 7, 8, 9] )
=======
function firstLastK(arr) {
    let n = arr.shift()
    let firstN = arr.slice(0,n)
    let lastN = arr.slice(arr.length - n, arr.length)

    console.log(firstN.join(" "));
    console.log(lastN.join(" "));
}

firstLastK( [2, 7, 8, 9] )
>>>>>>> 4016d8e618be482fc59a891502b9c263acbb9ed2
firstLastK( [3, 6, 7, 8, 9] )