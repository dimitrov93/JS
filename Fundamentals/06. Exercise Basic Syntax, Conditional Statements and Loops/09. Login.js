function login(input) {
    let user = input[0];
    let username = "";
    for (let i = user.length - 1; i >= 0; i--) {
        username += user[i];
    }

    let index = 1;
    let password = input[index];

    if (password == username) {
        console.log(`User ${user} logged in.`);
    } else {
        while (username != password) {
            password = input[index];
            if (password == username) {
                console.log(`User ${user} logged in.`);
                break;
            } else {
                if (index === 4) {
                    console.log(`User ${user} blocked!`);
                    break;
                }
                console.log(`Incorrect password. Try again.`);
                index++;
            }
        }5
    }
}

login(['Acer','login','go','let me in','recA'])