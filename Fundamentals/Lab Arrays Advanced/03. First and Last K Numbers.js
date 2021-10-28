function firstLastK(arr) {
    let n = arr.shift()
    let firstN = arr.slice(0,n)
    let lastN = arr.slice(arr.length - n, arr.length)

    console.log(firstN.join(" "));
    console.log(lastN.join(" "));
}

firstLastK( [2, 7, 8, 9] )
firstLastK( [3, 6, 7, 8, 9] )