//store in the variable the value of the XMLHttpRequest file
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// function that allows us to fetch the information from our API, receive a callback and trigger the calls we need
//We create an instance with the XMLHttpRequest object that includes several methods and attributes that allow us to handle the request.
function fetchData(urlApi, callback) {
  //build the request by generating the reference to the object I need
  let xhttp = new XMLHttpRequest(); // the instance that we just created
  //we call a url with the moethod object.open() we initialize the request
  xhttp.open("GET", urlApi, true); //(method, url, async, user, password), the true activates the asynchronism
  // listen to what the connection does
  //object.onreadystatechange defines a function that will be executed each time the readyState attribute changes
  xhttp.onreadystatechange = function (event) {
    // we validate to know if everything was successful
    if (xhttp.readyState === 4) {
      //this is the state in which it is currently 4 => is completed
      // to know the status of this value
      /* The status and statusText attributes carry the status of the XMLHttpRequest object. 
      The most common codes: 200: "OK", 403: "Forbidden", 404: "Page not found". */
      if (xhttp.status === 200) {
        /* we return the callback if all goes well, 
        the responseText attribute carries the response to the request as text, 
        in the case of our API request we must convert it to a JSON document to be able to access its elements using 
        JSON.parse(object.responseText) */
        callback(
          null,
          JSON.parse(xhttp.responseText)
        ); /* convetion the first value is an error, the second one the result, 
        since the result is a JSON => parse, because I recieve the response in text */
      } else {
        // if things don't go well we pass the url and status
        const error = new Error(`Error ${urlApi}, status ${xhttp.status}`);
        // at the end we return the callback with an error message and a null, since nothing is generated
        return callback(error, null); //null because I don`t send any result
      }
    }
  };
  //Request submission
  xhttp.send();
}
