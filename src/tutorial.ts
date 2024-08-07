// type StringVariable = string;
// type NumVariable = number;
// type BooleanVariable = boolean;

// const returnStr = (arg: StringVariable) => arg;
// const returnNum = (num1: NumVariable, num2: NumVariable) => num1 * num2;

// // console.log(returnStr("Yujin"));
// // console.log(returnNum(5, 4));

// const logicalFunc = (arg1: NumVariable, arg2: NumVariable): BooleanVariable => {
//   return arg1 > arg2;
// };

// // console.log(logicalFunc(1, 2));

// // union
// let tax: number | string = 10;
// tax = 100;
// tax = "$10";

// let requestStatus: "pending" | "success" | "error" = "pending";
// requestStatus = "error";

// let notSure: any = 4;

// type StrArr = string[];
// const books: StrArr = ["1984", "Brave New World", "Fahrenheit 451"];

// let foundBook: string | undefined;

// for (let book of books) {
//   if (book === "1984") {
//     foundBook = book;
//     foundBook = foundBook.toUpperCase();
//     break;
//   }
// }
// console.log(foundBook?.length);

// // Object
// let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };

// // Function
// function sayHi(name: string) {
//   console.log(`Hello there ${name.toUpperCase()}`);
// }
// sayHi("yujin");

// function calculateDiscount(price: number): number {
//   return price * 0.9;
// }

// const finalPrice = calculateDiscount(200);

// function calculatePrice(price: number, discount?: number): number {
//   return price - (discount || 0);
// }

// let priceAfterDiscount = calculatePrice(100, 20);

// function sum(message: string, ...numbers: number[]): string {
//   const doubled = numbers.map((num) => {
//     console.log(num);
//     return num * 2;
//   });
//   console.log(doubled);
//   let total = numbers.reduce((previous, current) => {
//     console.log({ previous, current });
//     return previous + current;
//   }, 0);
//   return `${message} ${total}`;
// }

// let result = sum("The total is: ", 1, 2, 3, 4, 5);
// console.log(result);

// const createEmployee = ({
//   id,
// }: {
//   id: number;
// }): { id: number; isActive: boolean } => {
//   return { id, isActive: id % 2 === 0 };
// };

// const first = createEmployee({ id: 1 });
// const second = createEmployee({ id: 2 });
// console.log({ first, second });

// const createStudent = (student: { id: number; name: string }): void => {
//   console.log(`Wecome to the course ${student.name.toUpperCase()}`);
// };

// const newStudent = {
//   id: 5,
//   name: "anna",
//   email: "bobo@gmail.com",
// };
// createStudent(newStudent);

// type User = {
//   id: number;
//   name: string;
//   isActive: boolean;
// };
// const john: User = {
//   id: 1,
//   name: "john",
//   isActive: true,
// };
// const susan: User = {
//   id: 1,
//   name: "susan",
//   isActive: false,
// };

// function createUser(user: User): {
//   id: number;
//   name: string;
//   isActive: boolean;
// } {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);

//   return user;
// }

// type Book = { id: number; name: string; price: number };

// const book1: Book = {
//   id: 1,
//   name: "how to cook a dragon",
//   price: 15,
// };

// const book2: Book = {
//   id: 2,
//   name: "the secret life of unicorns",
//   price: 18,
// };

// const discountedBook: Book & { discount: number } = {
//   id: 3,
//   name: "Gonomes vs. Goblins:The Ultimate Guide",
//   price: 18,
//   discount: 0.15,
// };

// // computed properties
// const propName = "age";
// type Animal = {
//   [propName]: number;
// };

// let tiger: Animal = { [propName]: 5 };

// // interface method
// interface BookInterface {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//   printAuthor(): void;
//   printTitle(message: string): string;
//   printSomething: (someVale: number) => number;
// }

// const deepWork: BookInterface = {
//   isbn: 123,
//   title: "Deep work",
//   author: "Cal Newport",
//   genre: "self-development",
//   // if you want an arrow function, you need to access like deepwork.author
//   printAuthor() {
//     console.log(this.author);
//   },
//   printTitle(message) {
//     return `${this.title} ${message}`;
//   },
//   // First Option
//   // printSomething: function (someVale) {
//   //   return someVale;
//   // },
//   // Second Option
//   // printSomething: (someValue) => {
//   //   // In Arrow function, this keyword access the global variable unlike normal function
//   //   console.log(deepWork.author);
//   //   return someValue;
//   // },

//   // Third Option
//   printSomething(someVale) {
//     return someVale;
//   },
// };

// // deepWork.printAuthor();
// // const result2 = deepWork.printTitle('is awesome');
// // console.log(result2);

// // console.log(deepWork.printSomething(34));

// // Merge and extend
// interface PersonInterface {
//   name: string;
//   getDetails(): string;
// }

// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// }
// interface PersonInterface {
//   age: number;
// }
// const personOne: PersonInterface = {
//   name: "John",
//   age: 37,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
// };

// interface BigPerson extends PersonInterface {
//   employeeId: number;
// }
// // console.log(personOne.age);
// const newPerson: BigPerson = {
//   name: "Smith",
//   employeeId: 123,
//   age: 37,
//   getDetails() {
//     return `Name: ${this.name}, EmployId: ${this.employeeId}`;
//   },
// };
// console.log(newPerson.getDetails());

// let person: [string, number] = ["john", 25];

// function getPerson(): [string, number] {
//   return ["john", 25];
// }
// console.log(getPerson());
// // Enum
// enum ServerResponseStatus {
//   Success = "200",
//   Error = "500",
// }

// // Object.values(ServerResponseStatus).forEach((value) => console.log(value));
// console.log(ServerResponseStatus);
// interface ServerResponse {
//   result: ServerResponseStatus;
//   data: string[];
// }

// function getServerResponse(): ServerResponse {
//   return {
//     result: ServerResponseStatus.Success,
//     data: ["First Item", "Second Item"],
//   };
// }

// const response: ServerResponse = getServerResponse();
// console.log(response);

// let someValue: any = "this is a string";
// let strLength: number = (someValue as string).length;

// type Bird = {
//   name: string;
// };

// let birdString = `{"name":"Eagle"}`;
// let dogString = `{"breed":"Poodle"}`;

// let birdObject = JSON.parse(birdString);
// let dogObject = JSON.parse(dogString);

// let bird = birdObject as Bird;
// let dog = dogObject as Bird;

// console.log(bird.name);
// console.log(dog.name);

// enum Status {
//   Pending = "pending",
//   Declined = "declined",
// }

// type User = {
//   name: string;
//   status: Status;
// };

// const statusValue = "pending";
// // without type insertion "as" it does not match the type of Status and thus TS error
// const user: User = { name: "Yujin", status: statusValue as Status };

// Type Unknown

// let unknownValue: unknown;

// unknownValue = "hello World";
// unknownValue = [1, 2, 3];
// unknownValue = 42.56;

// if (typeof unknownValue === "number") {
//   unknownValue.toFixed(2);
// }

// Type Never
// type Theme = "light" | "dark";

// function checkTheme(theme: Theme): void {
//   if (theme === "light") {
//     console.log("light theme");
//     return;
//   }
//   if (theme == "dark") {
//     console.log("dark theme");
//     return;
//   }
//   theme;
// }

// enum Color {
//   Red,
//   Blue,
//   Green,
// }

// const getColorName = (color: Color) => {
//   switch (color) {
//     case Color.Red:
//       return "Red";
//     case Color.Blue:
//       return "Blue";
//     case Color.Green:
//       return "Green";
//     default:
//       let unexpectedColor: never = color;
//       throw new Error(`Unexpected color value: ${color}`);
//       return unexpectedColor;
//   }
// };

// console.log(getColorName(Color.Blue));
// console.log(getColorName(Color.Green));

// function checkInput(input: Date | string) {
//   if (input instanceof Date) {
//     return input.getFullYear();
//   }
//   return input;
// }
// console.log(checkInput(new Date()));

// Generics
// const array1: string[] = ["hello"];
// function createString(arg: string): string {
//   return arg;
// }
// function createNumber(arg: number): number {
//   return arg;
// }

// function genericFunction<T>(arg: T): T {
//   return arg;
// }

// const someStringValue = genericFunction<string>("hello World");
// const someNumberValue = genericFunction<number>(2);

// interface GenericInterface<T> {
//   value: T;
//   getValue: () => T;
// }

// const genericString: GenericInterface<string> = {
//   value: "Hello world",
//   getValue() {
//     return this.value;
//   },
// };

// const someFunc = async (): Promise<string> => {
//   return "hello world";
// };

// const generateStringArray = (length: number, value: string): string[] => {
//   let result: string[] = [];
//   result = Array(length).fill(value);
//   return result;
// };
// const createArray = <T>(length: number, value: T): Array<T> => {
//   let result: Array<T> = []; // Corrected type
//   result = Array(length).fill(value);
//   return result;
// };
// // console.log(generateStringArray(6, "hello"));
// // second argumnet is generic
// let arrayNumbers = createArray<number>(10, 100);
// let arrayStrins = createArray<string>(10, "hello");

// const pair = <T, U>(param1: T, param2: U): [T, U] => {
//   return [param1, param2];
// };

// let result = pair<number, string>(123, "hello");
// // console.log(result);

// function processSValue<T extends string | number>(value: T): T {
//   console.log(value);
//   return value;
// }
// processSValue("hello");
// processSValue(12);

// type Car = {
//   brand: "ford";
// };

// Fetch data

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};
const url = "https://www.course-api.com/react-tours-project";

const fetchData = async (url: string): Promise<Tour[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Tour[] = await response.json();

    return data;
  } catch (error) {
    const errMeg =
      error instanceof Error ? error.message : "there was an error";
    console.log(errMeg);
    return [];
  }
};

const tours = await fetchData(url);
