//file system is installed by default in the node core
const fs = require("fs");

function read(route, callback) {
  //parameters of callback: err if something goes wrong, not shown, not found and data of file
  fs.readFile(route, (err, data) => {
    callback(data.toString());
    //without toString() not readable
  });
}

//read(__dirname + "/file.txt", console.log);

/* Hola, soy un archivo

Y tengo varias lineas! */

function write(route, content, callback) {
  fs.writeFile(route, content, function (err) {
    if (err) {
      console.error("No he podidp escribirlo", err);
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}

function eliminate(route, callback) {
  fs.unlink(route, callback);
}

write(__dirname + "/file1.txt", "Soy un archivo nuevo", console.log);
//Se ha escrito correctamente
read(__dirname + "/file1.txt", console.log);
//Soy un archivo nuevo
eliminate(__dirname + "/file1.txt", console.log);
