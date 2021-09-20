function oldbooks(input) {
    let book = input[0];
    let find = 0;
    let index = 1;
    let counter = 0;

    while (find !== "No More Books") {
        find = input[index];
        if (find !== book) {
            counter++;
        } else if (find == book) {
            console.log(`You checked ${counter} books and found it.`);
            break;
        } 
        
        if (find == "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${counter - 1} books.`);
            break;
        }
        index++;
    }
}


oldbooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])




