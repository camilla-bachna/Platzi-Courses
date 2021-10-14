const http = require("http");

http.createServer(router).listen(3000); //listen port

//create a basic router
function router(req, res) {
  /* this function has 2 parameters, a request is made from a client to the server (request, headers, methods) 
and the server sends the response to the client. */
  console.log("new request");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      let greeting = hello();
      res.write(greeting);
      res.end();
      break;
    default:
      res.write("Error 404! Esa url no exitse");
      res.end();
  }
  /*   //Write header
  res.writeHead(201, { "Content-Type": "text/plain" }); //When you create a file it returns a 201 (status code), so client knows everything is fine
  //Write response to the user
  res.write("Hola ya se usar HTTP de NodeJS");
  res.end(); */
}

function hello() {
  return "Hola, que tal?";
}

console.log("Escuchando http en el puerto 3000");
