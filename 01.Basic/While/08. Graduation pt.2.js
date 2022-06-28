function graduation(input) {
    let name = input[0];
    let grades = Number(input[1]);
    let sum = 0;
    let index = 1;
    let stopper = true;

    while (grades > 0) {
        grades = Number(input[index]);
        sum += grades;
        index++;
        console.log(grades);

    }

    console.log(grades);
}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
