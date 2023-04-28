// Utility types

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "casd",
  title: "Final project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));

// required and readonly

const recorA = (assign: Required<Assignment>): Assignment => {
  return assign;
};

const assignVer: Readonly<Assignment> = { ...assign1, verified: true };

recorA({ ...assign1, verified: true });

// Record

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";

type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  as1: number;
  as2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { as1: 51, as2: 32 },
  Kelly: { as1: 76, as2: 21 },
};

// Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">; //without
const preview: AssignPreview = {
 studentId: '123',
 title: "final project" 
};


// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

// Nonnullable

type AllPossibleGrades = "Dave" | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// Return type

type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number): newAssign => {
  return { title, points }
}


// Parametars

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: newAssign = createNewAssign(...assignArgs)

console.log(tsAssign2);


// Awaited - helps us with the ReturnType of Promise


interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

const fetchUsers = async (): Promise<User[]> => {

  const data = await fetch(
      'https://jsonplaceholder.typicode.com/users'
  ).then(res => {
      return res.json()
  }).catch(err => {
      if (err instanceof Error) console.log(err.message)
  })
  return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))