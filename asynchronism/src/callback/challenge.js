let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetchData(urlApi, callback) {
  //let's build the petition - generate the reference to the object
  let xhttp = new XMLHttpRequest(); // the instance that we just created
  xhttp.open("GET", urlApi, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      /*    this is the state in which it is currently
      4 => is completed
       if I have this value, I have to execute the following call to know the status of this value*/
      if (xhttp.status === 200) {
        callback(
          null,
          JSON.parse(xhttp.responseText)
        ); /* convetion the first value is an error, 
        the second one the result, 
        since the result is a JSON => parse, because I recieve the response in text */
      } else {
        const error = new Error(`Error ${urlApi}`);
        return callback(error, null); //null because I don`t send any result
      }
    }
  };
  //Request submission
  xhttp.send();
}
