function password(input) {
    let username = input[0];
    let password = input[1];
    let index = 2;
    let userPassword = input[index];

    while (password !== userPassword) {
        userPassword = input[index];
        if (userPassword == password) {
            break;
        }
        index++;
    }
    console.log(`Welcome ${username}!`);
    
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
