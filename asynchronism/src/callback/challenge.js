//store in the variable the value of the XMLHttpRequest file
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/character/";

// function that allows us to fetch the information from our API, receive a callback and trigger the calls we need
//We create an instance with the XMLHttpRequest object that includes several methods and attributes that allow us to handle the request.
function fetchData(urlApi, callback) {
  //build the request by generating the reference to the object I need
  const xhttp = new XMLHttpRequest(); // the instance that we just created
  //we call a url with the method object.open() we initialize the request
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
        ); /* convention the first value is an error, the second one the result, 
        since the result is a JSON => parse, because I receive the response in text */
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

// we call the function and pass the url this will return all information - 3 calls to API with callbacks
//in data1 the first answer is saved - data of all characters
fetchData(API, function (error1, data1) {
  //https://rickandmortyapi.com/api/character/
  if (error1) {
    //return error and terminate execution
    return console.error(error1); //e.g. Error: Error https://rickandmortyapi.com/api/character1, status 404
  }
  //in data2 - all data of first character Rick Sanchez
  fetchData(API + data1.results[0].id, function (error2, data2) {
    //https://rickandmortyapi.com/api/character/1
    if (error2) {
      return console.error(error2);
    }
    //in data3 - all data of location Earth

    fetchData(data2.origin.url, function (error3, data3) {
      //https://rickandmortyapi.com/api/location/1
      if (error3) {
        return console.error(error3);
      }
      const {
        info: { count },
      } = data1; //data1.info.count
      const { name } = data2; //data2.name
      const { dimension } = data3; //data3.dimension
      console.log(count); //671
      console.log(name); //Rick Sanchez
      console.log(dimension); //Dimension C-137
    });
  });
});
