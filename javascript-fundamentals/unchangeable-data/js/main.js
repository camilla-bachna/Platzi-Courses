/* closures */

function createGreetings(finalPartOfSentence) {
  //is a creating function of other functions
  return function (name) {
    //anonymous function, this function returns createGreetings will be each of the ones down (saluteArgetina ...)
    console.log(`Hola ${name} ${finalPartOfSentence}`);
  };
}

const saluteArgetina = createGreetings("che"); // here we send the final part of each sentence
const saluteMexico = createGreetings("güey");
const saluteColombia = createGreetings("amigo");

saluteArgetina("Sacha"); //Hola Sacha che
saluteMexico("Sacha"); //Hola Sacha güey
saluteColombia("Sacha"); //Hola Sacha amigo
