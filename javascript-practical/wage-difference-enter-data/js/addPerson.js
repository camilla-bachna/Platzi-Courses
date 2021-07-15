"use strict";

let list = [];

function addCountry() {
  const country = document.querySelector(".js-country");
  const countryValue = country.value;

  //paint
  const selectedCountry = document.querySelector(".js-resultCountry");
  console.log(country);
  if (countryValue === "") {
    selectedCountry.innerHTML = `Por favor, añade el país, personas y sus salarios.`;
  } else {
    selectedCountry.innerHTML = `El país seleccionado es ${countryValue}.`;
  }
}

addCountry();

function calculateMediana() {
  //get values
  const person = document.querySelector(".js-person");
  const personValue = person.value;

  const wage = document.querySelector(".js-wage");
  const wageValue = Math.round(wage.value);

  const result = document.querySelector(".js-result");
  const listPeople = document.querySelector(".js-list");

  //add values to list
  list.push({ name: personValue, salary: wageValue });
  //paint
  const listElement = document.createElement("LI");
  listElement.innerHTML = `nombre: ${personValue}, salario : ${wageValue} Euros`;
  listPeople.appendChild(listElement);

  console.log(list);
  //calculator mediana
  function calculateMediana(list) {
    const sumNumbersList = list.reduce(function (
      accumulatedValue = 0,
      newElement
    ) {
      return accumulatedValue + newElement;
    });

    const averageNumber = sumNumbersList / list.length;
    return averageNumber;
  }

  console.log(list);

  //mediana general

  const wagesAddedPeople = list.map(function (people) {
    return people.salary;
  });

  //sort salaries
  const wagesAddedPeopleSorted = wagesAddedPeople.sort(function (wage1, wage2) {
    return wage1 - wage2;
  });

  console.group("Wages sorted");
  console.log(wagesAddedPeopleSorted);
  console.groupEnd();

  //mediana

  //helpers (odd or even)
  function isEven(number) {
    return number % 2 === 0;
  }

  //calculate mediana of salaries
  function medianaWages(list) {
    const middle = parseInt(list.length / 2);
    if (isEven(list.length)) {
      const personInMiddle1 = list[middle - 1];
      const personInMiddle2 = list[middle];
      const mediana = calculateMediana([personInMiddle1, personInMiddle2]);
      return mediana;
    } else {
      const personInMiddle = list[middle];
      return personInMiddle;
    }
  }

  const medianaWagesAddedPeople = medianaWages(wagesAddedPeopleSorted);
  result.innerHTML = `La mediana general es ${medianaWagesAddedPeople} Euros.`;

  console.group("Wages mediana");
  console.log(medianaWagesAddedPeople);
  console.groupEnd();
}
