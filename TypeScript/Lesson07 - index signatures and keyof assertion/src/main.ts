// Index Signatures

interface TranscationObj {
  readonly [index: string]: number;
  Pizza:  number,
  Books: number,
  Job: number,
}
// interface TranscationObj {
//   Pizza: number,
//   Books: number,
//   Job: number
// }

const todaysTranscations: TranscationObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTranscations.Pizza);
console.log(todaysTranscations["Pizza"]);

let prop: string = "Pizza";

console.log(todaysTranscations[prop]);

const todaysNet = (transactions: TranscationObj): number => {
  let total = 0;
  for (const transcation in transactions) {
    total += transactions[transcation];
  }
  return total;
};

console.log(todaysNet(todaysTranscations));

/////////////////////////////////

interface Student {
  // [key:string]: string | number | number[] | undefined
  name: string,
  GPA: number,
  classes?: number[]
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200]
}

// console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student]);
})

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, 'GPA')



////////////////////////////////////////////


// interface Incomes {
//   [key: string | number]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250
}

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}