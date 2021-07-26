"use strict";
const optionFilm = { crossDomain: true };
/*
 * declare promise
 * @param filmUrl: the url to request info of films
 * jQuery $.get to make a request
 */
function getAFilm(filmUrl) {
  return new Promise((resolve, reject) => {
    $.get(filmUrl, optionFilm, function (data) {
      resolve(data);
    }).fail(() => reject(console.log("Error")));
  });
}

module.exports = getAFilm;
