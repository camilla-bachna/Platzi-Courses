function hello(name, anotherCallback) {
  setTimeout(function () {
    console.log(`Hola ${name}`);
    anotherCallback(name);
  }, 1500);
}

function talk(callbackTalk) {
  setTimeout(function () {
    console.log("Bla bla bla bla");
    callbackTalk();
  }, 1000);
}

function goodBye(name, oneMoreCallback) {
  setTimeout(function () {
    console.log(`Adios, ${name}`);
    oneMoreCallback();
  }, 1000);
}

function conversation(name, times, callback) {
  if (times > 0) {
    talk(function () {
      conversation(name, --times, callback); //times minus one
    });
  } else {
    goodBye(name, callback);
  }
}

console.log("Iniciando proceso...");
//easier to read
hello("Camilla", function (name) {
  conversation(name, 3, function () {
    console.log("Proceso terminado");
  });
});

/* Iniciando proceso...
Ultimo console.log al final de codigo...
Hola Camilla
Bla bla bla bla
Bla bla bla bla
Bla bla bla bla
Adios, Camilla
Proceso terminado */

/* 
Callback hell
hello("Carlos", function (name) {
  talk(function () {
    talk(function () {
      talk(function () {
        goodBye(name, function () {
          console.log("El proceso ha sido terminado");
        });
      });
    });
  });
}); */

console.log("Ultimo console.log al final de codigo...");
