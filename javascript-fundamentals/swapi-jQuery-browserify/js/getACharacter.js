"use strict";

const apiUrl = "https://swapi.dev/api/";
const people = "people/:id/";
const optionCharacter = { crossDomain: true };

/*
 * declare promise
 * @param id: part of the urls, each id of array ids
 * jQuery $.get to make a request
 */
function getACharacter(id) {
  return new Promise((resolve, reject) => {
    const url = `${apiUrl}${people.replace(":id", id)}`;
    $.get(url, optionCharacter, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

module.exports = getACharacter;
