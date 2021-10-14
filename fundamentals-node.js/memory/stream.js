//create stream
const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");
readableStream.setEncoding("utf-8");
readableStream.on("data", function (chunk) {
  // console.log(chunk); //without setEncoding <Buffer 73 6f 79 20 0a 75 6e 20 0a 61 72 63 68 69 76 6f 0a 71 75 65 20 0a 76 61 6d 6f 73 20 0a 61 0a 6c 65 65 72>
  /* soy 
un 
archivo
que 
vamos 
a
leer */
  data += chunk;
});

readableStream.on("end", function () {
  console.log(data);
}); //reads data and when finished shows it

process.stdout.write("hola");
process.stdout.write("que");
process.stdout.write("tal");
/* holaquetal */

const Transform = stream.Transform;

function Mayus() {
  Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);

/* SOY 
UN 
ARCHIVO
QUE 
VAMOS 
A
LEER */
