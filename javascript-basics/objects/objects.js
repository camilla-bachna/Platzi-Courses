/* var car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  detailsOfCar: function () {
    console.log(`Car ${this.model} ${this.year}`);
  },
};

console.log(car);
console.log(car.brand); //Toyota
console.log(car["brand"]); //Toyota
console.log(car.detailsOfCar()); //Car Corolla 2020 */

//construction function -  función constructora
function car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

console.log(car);
/* ƒ car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  } */

var newCarTesla = new car("Tesla", "Model 3", 2020);
console.log(newCarTesla); //car {brand: "Tesla", model: "Model 3", year: 2020}

var newCarVolkswagen = new car("Volkswagen", "Golf", 2021);
console.log(newCarVolkswagen); //car {brand: "Volkswagen", model: "Golf", year: 2021}

var brands = [
  "Volkswagen",
  "Audi",
  "Bentley",
  "Chrysler",
  "Citroen",
  "Dacia",
  "Fiat",
  "Mercedes",
  "BMW",
  "Porsche",
  "Honda",
  "Ford",
  "Nissan",
  "Alfa-Romero",
  "Aston-Martin",
];

var models = [
  "Model 3",
  "Model X",
  "Model A",
  "Model XX",
  "Model Z",
  "Model 3",
  "Model X",
  "Model A",
  "Model XX",
  "Model Z",
  "Model 3",
  "Model X",
  "Model A",
  "Model XX",
  "Model Z",
];

var years = [
  1998, 2020, 2021, 1970, 1968, 1999, 2012, 2019, 2022, 1996, 1989, 2016, 2018,
  2020, 2022,
];

for (
  var i = 0;
  i < brands.length && i < models.length && i < years.length;
  i++
) {
  var newCar = new car(brands[i], models[i], years[i]);
  console.log(newCar);
}
