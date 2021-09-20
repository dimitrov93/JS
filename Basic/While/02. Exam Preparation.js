function examPrep(input) {
    let goodGrades = 0;
    let badGrades = 0;
    let counter = 0;
    let sum = 0;
    let lastTask = "";
    let badGradesFromConsole = Number(input[0]);
    let index = 1;
    let final = false;


    while (badGrades <  badGradesFromConsole) {
        let grades = Number(input[index + 1])
        if (grades <= 4) {
            badGrades++;
        } else {
            goodGrades++;
        }
        index+=2;

        counter++;
        sum += grades;
        lastTask = input[index];
        if (lastTask == "Enough") {
            final = true;
            break;
        }
    }

    if (final) {
        console.log(`Average score: ${(sum / counter).toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        lastTask = input[index-2]
        console.log(`Last problem: ${lastTask}`);
    } else {
        console.log(`You need a break, ${badGrades} poor grades.`);
    }
}

examPrep(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

