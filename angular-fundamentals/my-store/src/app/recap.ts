const username: string = 'camilla-bachna';
//const username: string = 1; //Error: Type 'number' is not assignable to type 'string'.
//const username: string | number = 1; // could be string or number
const sum = (a: number, b: number) => {
  const result = a + b;
  return result;
};

sum(8, 9); //const sum: (a: number, b: number) => number
//sum(8, "1"); //Error: Argument of type 'string' is not assignable to parameter of type 'number'.

/* class Person {
  //Property 'age' has no initializer and is not definitely assigned in the constructor.
  age: number;
  lastName: string;
} */

/* class Person {
  private age: number;
  lastName: string;
  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
} */

//saving lines of code
class Person {
  constructor(private age: number, public lastName: string) {}
}

const camilla = new Person(23, 'Müller');
//camilla.age; //Property 'age' is private and only accessible within class 'Person'.
