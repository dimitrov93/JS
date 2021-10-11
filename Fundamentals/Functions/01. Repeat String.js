function repeat(str,n) {
    let result = " ";

    for (let i = 0; i < n; i++) {
        result += str;
    }

    console.log(result);;
}
repeat("abc", 3)