function solve(arr) {
    let firstPart = arr
    .substring(0, arr.length /2)
    .split("")
    .reverse()
    .join("")

    let secondPart = arr
    .substring(arr.length /2)
    .split("")
    .reverse()
    .join("")
    console.log(firstPart);
    console.log(secondPart);
  
}

solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')