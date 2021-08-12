/* if there are problems: rm -rf .cache dist, add .cache dist in .gitignore */

console.log("Hello TypeScript")

/* Basic types */

//Boolean
let muted: boolean = true;
muted = false

//Number
function add(a: number, b: number){
    return a + b;
}

const sum = add(2, 3)

let number1: number = 42; 
let number2: number = 6; 
let result = number1 / number2;

//String
let firstName: string = "Camilla";
let greet = `Me llamo ${firstName}`;

//Array
let people: string[] = ["Isabel", "Raul"];
//people.push("9000")

let peopleAndNumbers: Array < string | number > = []
peopleAndNumbers.push("Antonio", "Pedro", "Isabel");
peopleAndNumbers.push(9000);

//Enum - special type allows for describing a value which could be one of a set of possible named constants
//TypeScript provides both numeric and string-based enums.

enum Color {
    red, 
    green,
    blue,
}

let favoriteColor: Color = Color.blue

console.log(`My favorite color is ${favoriteColor}`) //My favorite color is 2

// ts assigns 0, 1, 2, 3 ... if you want the word 
//once we initialized 1 we have to initialize all

enum Color2 {
    red = "red", 
    green = "green",
    blue = "blue",
}

let favoriteColor2: Color2 = Color2.blue

console.log(`My favorite color is ${favoriteColor2}`) //My favorite color is blue

//Any - if we do not know which type it is, can be string, object etc
let comodin: any = "Joker";
comodin = {type: "Wildcard"};

//Object
let someObject: object = {type: "Wildcard"};