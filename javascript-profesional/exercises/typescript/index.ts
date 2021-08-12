/* if there are problems: rm -rf .cache dist, add .cache dist in .gitignore */

console.log("Hello TypeScript");

/* Basic types */

//Boolean
let muted: boolean = true;
muted = false;

//Number
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

let favoriteColor: Color = Color.blue;

console.log(`My favorite color is ${favoriteColor}`); //My favorite color is 2

// ts assigns 0, 1, 2, 3 ... if you want the word 
//once we initialized 1 we have to initialize all

enum Color2 {
    red = "red", 
    green = "green",
    blue = "blue",
}

let favoriteColor2: Color2 = Color2.blue;

console.log(`My favorite color is ${favoriteColor2}`); //My favorite color is blue

//Any - if we do not know which type it is, can be string, object etc
let comodin: any = "Joker";
comodin = {type: "Wildcard"};

//Object
let someObject: object = {type: "Wildcard"};

//Functions - be explicit with the type of arguments and the return type of a function
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(2, 3);

// Function returning a function
function createAdder (a: number): (b: number) => number {
    return function(b) : number{
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

//sometimes not all parameters are mandatory, some are optional
function fullName(firstName: string, lastName?: string): string {
return `${firstName} ${lastName}`;
}

const camilla = fullName("Camilla", "Bachna");

//but its possible that i do not have information about the last name so I want that the following line is valid:
//add ? after lastName, so this argument can be undefined or a string
const richard = fullName("Richard");

// if we want a value by default
function fullName2(firstName: string, lastName: string = "Smith"): string {
    return `${firstName} ${lastName}`;
    }

const william = fullName2("William");
console.log(william) //William Smith

//Interfaces - defines the exact form an object is supposed to have, cannot add more properties or have less
// if a property is optional => mark as optional with ?
interface Rectangle {
    with: number;
    height: number;
    color?: Color;
}

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
}

//is of the type Rectangle, if we did not write e.g. height: 
//Property 'height' is missing in type '{ with: number; }' but required in type 'Rectangle'.
let rect: Rectangle = {
    with: 4, 
    height: 6,
    color: Color.Rojo, //without this line: Un rectangulo
}

function area(r: Rectangle): number{
    return r.with * r.height;
}

const areaRect = area(rect);

console.log(areaRect); //24

rect.toString = function (){
    //if we have the color (is optional) print it
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`; //Un rectangulo Rojo
}

console.log(rect.toString())