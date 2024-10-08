// Array Challenge

// const numArr: number[] = [];
// numArr.push(1);

// const strArr: string[] = [];
// strArr.push('Yujin');

// const unionArr: (number | string)[] = [];
// unionArr.push(1, 'hello', 2);

// // Object Challenge
// type Object = {
//   brand: string;
//   year: number;
// };
// let bike: Object = { brand: 'yamaha', year: 2000 };
// let laptop: Object = { brand: 'Apple', year: 2024 };
// let arr: Object[] = [{ brand: 'samsung', year: 2000 }];
// arr.push({ brand: 'Howgrow', year: 2020 });
// console.log(arr);

// const myCoworkers: string[] = ['Yujin', 'Zena', 'El', 'Blue'];

// const findMyCoworker = (name: string): boolean => {
//   return myCoworkers.some((cur) => cur === name);
// };
// // console.log(findMyCoworker('Yujin'));

// const processInput = (arg: string | number) => {
//   if (typeof arg === 'number') {
//     return arg * 2;
//   } else if (typeof arg === 'string') {
//     return arg.toUpperCase();
//   }
// };
// // console.log(processInput('yujin'));

// const processData = (
//   input: string | number,
//   config: { reverse: boolean } = { reverse: false }
// ) => {
//   if (config.reverse && typeof input === 'string') {
//     const split = input.split('');
//     const reverse = split.reverse().join('');
//     return reverse;
//   } else if (typeof input === 'number') {
//     return Math.sqrt(input);
//   } else if (typeof input === 'string') {
//     return input.toUpperCase();
//   }
// };
// // console.log(processData(3, { reverse: true }));

// type Employee = {
//   id: string;
//   name: string;
//   deparment: string;
// };

// type Manager = {
//   id: string;
//   name: string;
//   employees: Employee[];
// };

// type Staff = Employee | Manager;

// const alice: Employee = {
//   id: 'alice',
//   name: 'Alice',
//   deparment: 'Melbourne',
// };

// const steve: Employee = {
//   id: 'steve',
//   name: 'Steve',
//   deparment: 'Sydney',
// };

// const bob: Manager = {
//   id: 'bob',
//   name: 'Bob',
//   employees: [alice, steve],
// };

// const printStaffDetails = (staff: Staff) => {
//   if ('employees' in staff) {
//     console.log(
//       `This staff is a manager and having ${staff?.employees?.length} employees`
//     );
//   } else {
//     console.log(
//       `This staff is an employee, belongs to ${staff?.deparment} deparment`
//     );
//   }
// };
// // console.log(printStaffDetails(bob));

// // interface challenge
// interface Computer {
//   readonly id: string;
//   brand: string;
//   ram: number;
//   storage?: number;
//   upgradeRam: (ramNum: number) => number;
// }

// const myComputer: Computer = {
//   id: '123',
//   brand: 'apple',
//   ram: 18,
//   upgradeRam: function (num: number): number {
//     this.ram += num;
//     return this.ram;
//   },
// };
// console.log(myComputer.upgradeRam(5));
// function getEmployee(): Person | DogOwner | Manager {
//   const random = Math.random();
//   if (random < 0.33) {
//     return { name: "Yujin" };
//   } else if (random < 0.66) {
//     return {
//       name: "Sarah",
//       dogName: "rex",
//     };
//   } else {
//     return {
//       name: "Bob",
//       managePeople() {
//         console.log("manage Poeple");
//       },
//       delegateTasks() {
//         console.log("delegate taks");
//       },
//     };
//   }
// }
// interface Person {
//   name: string;
// }

// interface DogOwner extends Person {
//   dogName: string;
// }
// interface Manager extends Person {
//   managePeople: () => void;
//   delegateTasks: () => void;
// }

// const employee: Person | DogOwner | Manager = getEmployee();
// // console.log(employee.delegateTasks);

// function isManager(obj: Person | DogOwner | Manager): obj is Manager {
//   return "managePeople" in obj;
// }
// console.log(isManager(employee));

// if (isManager(employee)) {
//   console.log(employee.delegateTasks());
// }

enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

const createUser = (user: User): User => {
  return user;
};

const result = createUser({
  id: 123,
  name: "yujin",
  role: UserRole.Employee,
  contact: ["test@gmail.com", "010-0000-0000"],
});
console.log(result);
