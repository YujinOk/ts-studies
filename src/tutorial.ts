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
tax = "$10";

let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "error";

let notSure: any = 4;

type StrArr = string[];
const books: StrArr = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    foundBook.length;
    break;
  }
}
foundBook;
