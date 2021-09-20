function salary(input) {
    let n = Number(input[0]);
    let salary = Number(input[1]);
    let text = " ";

    for (let i = 2; i <= n + 1; i++) {
        text = input[i];
        if (text == "Facebook") {
            salary = salary - 150;
        } else if (text == "Instagram") {
            salary = salary - 100;
        } else if (text == "Reddit") {
            salary = salary - 50;
        }

        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }
    }

    if (salary > 0) {
        console.log(salary);
    }

}

salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])
