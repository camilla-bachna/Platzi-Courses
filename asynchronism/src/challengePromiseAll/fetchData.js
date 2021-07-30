"use strict";

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//without callback
const fetchData = (urlApi) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", urlApi, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? //if this condition occurs resolve will be executed
            resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error", urlApi));
      }
    };

    xhttp.send();
  });
};

module.exports = fetchData;
