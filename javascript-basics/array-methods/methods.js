var articles = [
  { name: "Bici", costs: "3000" },
  { name: "TV", costs: "2500" },
  { name: "Libro", costs: "320" },
  { name: "Móvil", costs: "10000" },
  { name: "Laptop", costs: "20000" },
  { name: "Teclado", costs: "500" },
  { name: "Auriculares", costs: "1700" },
];

//filter
var filteredArticles = articles.filter(function (article) {
  return article.costs <= 500;
});

console.log(filteredArticles); //[{name: "Libro", costs: "320"}, {name: "Teclado", costs: "500"}]

//map
var articleName = articles.map(function (article) {
  return article.name;
});

console.log(articleName); //["Bici", "TV", "Libro", "Móvil", "Laptop", "Teclado", "Auriculares"]

//find
var findArticle = articles.find(function (article) {
  return article.name === "Laptop";
});

console.log(findArticle); //{name: "Laptop", costs: "20000"}

//forEach
articles.forEach(function (article) {
  console.log(article.name);

  /*   Bici
TV
Libro
Móvil
Laptop
Teclado
Auriculares */
});

//some
var cheapArticles = articles.some(function (article) {
  return article.costs <= 700;
});

console.log(cheapArticles); //true
