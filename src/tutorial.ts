type StringVariable = string;
type NumVariable = number;
type BooleanVariable = boolean;

const returnStr = (arg: StringVariable) => arg;
const returnNum = (num1: NumVariable, num2: NumVariable) => num1 * num2;

// console.log(returnStr("Yujin"));
// console.log(returnNum(5, 4));

const logicalFunc = (arg1: NumVariable, arg2: NumVariable): BooleanVariable => {
  return arg1 > arg2;
};

// console.log(logicalFunc(1, 2));

// union
let tax: number | string = 10;
tax = 100;
tax = '$10';

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'error';

let notSure: any = 4;

type StrArr = string[];
const books: StrArr = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '1984') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}
console.log(foundBook?.length);

// Object
let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };

// Function
function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}
sayHi('yujin');

function calculateDiscount(price: number): number {
  return price * 0.9;
}

const finalPrice = calculateDiscount(200);

function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => {
    console.log(num);
    return num * 2;
  });
  console.log(doubled);
  let total = numbers.reduce((previous, current) => {
    console.log({ previous, current });
    return previous + current;
  }, 0);
  return `${message} ${total}`;
}

let result = sum('The total is: ', 1, 2, 3, 4, 5);
console.log(result);

const createEmployee = ({
  id,
}: {
  id: number;
}): { id: number; isActive: boolean } => {
  return { id, isActive: id % 2 === 0 };
};

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log({ first, second });

const createStudent = (student: { id: number; name: string }): void => {
  console.log(`Wecome to the course ${student.name.toUpperCase()}`);
};

const newStudent = {
  id: 5,
  name: 'anna',
  email: 'bobo@gmail.com',
};
createStudent(newStudent);

type User = {
  id: number;
  name: string;
  isActive: boolean;
};
const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): {
  id: number;
  name: string;
  isActive: boolean;
} {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

type Book = { id: number; name: string; price: number };

const book1: Book = {
  id: 1,
  name: 'how to cook a dragon',
  price: 15,
};

const book2: Book = {
  id: 2,
  name: 'the secret life of unicorns',
  price: 18,
};

const discountedBook: Book & { discount: number } = {
  id: 3,
  name: 'Gonomes vs. Goblins:The Ultimate Guide',
  price: 18,
  discount: 0.15,
};

// computed properties
const propName = 'age';
type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };

// interface method
interface BookInterface {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someVale: number) => number;
}

const deepWork: BookInterface = {
  isbn: 123,
  title: 'Deep work',
  author: 'Cal Newport',
  genre: 'self-development',
  // if you want an arrow function, you need to access like deepwork.author
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // First Option
  // printSomething: function (someVale) {
  //   return someVale;
  // },
  // Second Option
  // printSomething: (someValue) => {
  //   // In Arrow function, this keyword access the global variable unlike normal function
  //   console.log(deepWork.author);
  //   return someValue;
  // },

  // Third Option
  printSomething(someVale) {
    return someVale;
  },
};

// deepWork.printAuthor();
// const result2 = deepWork.printTitle('is awesome');
// console.log(result2);

// console.log(deepWork.printSomething(34));

// Merge and extend
interface PersonInterface {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}
interface PersonInterface {
  age: number;
}
const personOne: PersonInterface = {
  name: 'John',
  age: 37,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

interface BigPerson extends PersonInterface {
  employeeId: number;
}
// console.log(personOne.age);
const newPerson: BigPerson = {
  name: 'Smith',
  employeeId: 123,
  age: 37,
  getDetails() {
    return `Name: ${this.name}, EmployId: ${this.employeeId}`;
  },
};
console.log(newPerson.getDetails());
