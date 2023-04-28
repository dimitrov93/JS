"use strict";
// Index Signatures
// interface TranscationObj {
//   Pizza: number,
//   Books: number,
//   Job: number
// }
const todaysTranscations = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTranscations.Pizza);
console.log(todaysTranscations["Pizza"]);
let prop = "Pizza";
console.log(todaysTranscations[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transcation in transactions) {
        total += transactions[transcation];
    }
    return total;
};
console.log(todaysNet(todaysTranscations));
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
