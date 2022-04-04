function solve(arr) {
    let empty = [];
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i].charCodeAt(0)
        if (el >= 65 && el <= 90) {
            empty.push(arr[i])
        } else {
            empty[empty.length - 1] += arr[i];
        }
    }
    console.log(empty.join(", "));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')