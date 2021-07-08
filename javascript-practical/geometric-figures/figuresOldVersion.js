//square
const sideSquare = 5;

function calculatePerimeterSquare(sideSquare) {
  const perimeterSquare = sideSquare * 4;
  return perimeterSquare;
}

function calculateAreaSquare(sideSquare) {
  const areaSquare = sideSquare * sideSquare;
  return areaSquare;
}

console.log(
  `Los lados de cuadrado miden ${sideSquare}cm y el perímetro ${calculatePerimeterSquare(
    sideSquare
  )}cm y el área del cuadrado son ${calculateAreaSquare(sideSquare)}cm^2.`
);
/* console.log(Los lados de cuadrado miden" 
+ sideSquare 
+ "cm y el perímetro" 
+ calculatePerimeterSquare(sideSquare) 
+ "cm y el área del cuadrado son" 
+ calculateAreaSquare(sideSquare) 
+ "cm^2";) */

//triangle
const sideTriangle1 = 6;
const sideTriangle2 = 6;
const baseTriangle = 4;
const heightTriangle = 5.5;

function calculatePerimeterTriangle(
  sideTriangle1,
  sideTriangle2,
  baseTriangle
) {
  const perimeterTriangle = sideTriangle1 + sideTriangle2 + baseTriangle;
  return perimeterTriangle;
}

function calculateAreaTriangle(baseTriangle, heightTriangle) {
  const areaTriangle = (baseTriangle * heightTriangle) / 2;
  return areaTriangle;
}

console.log(
  `Los lados de triángulo son ${sideTriangle1}cm, ${sideTriangle2}cm y ${baseTriangle}cm, la altura del triángulo es de ${heightTriangle}cm. El perímetro ${calculatePerimeterTriangle(
    sideTriangle1,
    sideTriangle2,
    baseTriangle
  )}cm y el área del triángulo son ${calculateAreaTriangle(
    baseTriangle,
    heightTriangle
  )}cm^2.`
);

//Circle

//Radius
const radiusCircle = 4;
//Diameter
const diameterCircle = radiusCircle * 2;
//Pi
//const pi = 3.1415;
const pi = Math.PI;
console.log("PI es: " + pi);
//Circumference (Perimeter)

function calculatePerimeterCircle(diameterCircle, pi) {
  const perimeterCircle = diameterCircle * pi;
  return perimeterCircle;
}

//Area
function calculateAreaCircle(radiusCircle, pi) {
  const areaCircle = radiusCircle * radiusCircle * pi;
  return areaCircle;
}

console.log(
  `El radio del cículo es ${radiusCircle}cm y el diámetro es ${diameterCircle}cm. El perímetro es ${calculatePerimeterCircle(
    diameterCircle,
    pi
  )}cm y el área del cículo es ${calculateAreaCircle(radiusCircle, pi)}cm^2.`
);
