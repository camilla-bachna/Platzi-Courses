"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Use TS, define types for parameters
/* function createPicture(title: string, date: string, size: SquareSize) {
  //the last parameter has to be one of these 3 sizes
  console.log("createPicture using", title, date, size);
}

createPicture("My birthday", "2020-03-10", "100x100");
createPicture("Colombia Trip", "2020-03"); //Expected 3 arguments, but got 2. An argument for 'size' was not provided.
 */
//In TS we can use optional parameters
function createPicture(title, date, size) {
    //? means that this value may not be available
    console.log("createPicture using", title, date, size); //createPicture using Colombia Trip 2020-03 undefined
}
createPicture("My birthday", "2020-03-10", "100x100"); //createPicture using My birthday 2020-03-10 100x100
createPicture("Colombia Trip", "2020-03");
createPicture("My birthday"); //createPicture using My birthday undefined undefined
//we can even use the function without any parameter
createPicture(); //createPicture using undefined undefined undefined
//Array function
/**
 * List of properties of a photo
 *
 * @param {string} title Name of the photo.
 * @param {string} date Date when photo was taken taken.
 * @param {SquareSize} size (Optional) Photo size.
 *
 * @return {object}
 */
let createPic = (title, date, size) => ({
    /*   return {
      title: title, //left: attributes of our object, right: the state of our variables is evaluated and we assign a value to it
      date: date,
      size: size,
    }; */
    //more elegant: since ES6 not necessary to repeat, easier to read
    title,
    date,
    size,
});
const picture = createPic("Plaza Mayor", "2021-08-10", "500x500"); //picture { title: 'Plaza Mayor', date: '2021-08-10', size: '500x500' }
console.log("picture", picture);
//TS: Type return
function handleError(code, message) {
    //Process code or message
    if (message === "error") {
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return "An error occurred";
    }
}
/* let result = handleError(200, "OK"); //string
console.log("result", result); //result An error occurred
result = handleError(404, "error"); //never: never returns a valid value
console.log("result", result); //Stack trace with line where error occurred. Error: error. Code error: 404 */
//to capture error independently
try {
    let result = handleError(200, "OK"); //string
    console.log("result", result); //result An error occurred
    result = handleError(404, "error");
    console.log("result", result); //an error would be thrown but we are handling it within the try catch
}
catch (_a) { }
