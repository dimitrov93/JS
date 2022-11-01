// // let username = 'Ivan';

// // console.log(username);

// let isOpen: boolean[] = [false, true];

// function createUser(username: string, age = 0) {
//     return {
//         username,
//         age
//     };
// };

// const ivan = createUser('Ivan', 21)

// console.log(ivan);

function id<T>(item: T): T {
  return item;
}

interface IMyDto {
  prop: string;
  prop1: number;
}

const num = id<IMyDto>({ prop: "1", prop1: 1 });

class MyClass {
    constructor(public name : string, private age: number) {

    }
}

const ivan = new MyClass('Ivan', 20);
// (ivan as any).age = 1000;
// (ivan as {test: {best: 123}}).age = 1000;


enum UserRole {
  Admin = "das",
  User = 'das',
}