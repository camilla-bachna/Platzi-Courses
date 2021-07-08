"use strict";

//Pi

const pi = Math.PI;

//square code
console.group("Cuadrados");

//perimeter
function perimeterSquare(sideSquare) {
  return sideSquare * 4;
}

perimeterSquare(5);

//area
function areaSquare(sideSquare) {
  return sideSquare * sideSquare;
}

areaSquare(5);

console.groupEnd();

//triangle code
console.group("Triángulos");

//perimeter
function perimeterTriangle(sideTriangle1, sideTriangle2, baseTriangle) {
  return sideTriangle1 + sideTriangle2 + baseTriangle;
}

//area
function areaTriangle(baseTriangle, heightTriangle) {
  return (baseTriangle * heightTriangle) / 2;
}

console.groupEnd();

//circle code
console.group("Circulo");

//diameter
function diameterCircle(radiusCircle) {
  return radiusCircle * 2;
}

//circumference (perimeter)
function perimeterCircle(radiusCircle) {
  const diameter = diameterCircle(radiusCircle);
  return diameter * pi;
}

//area
function areaCircle(radiusCircle) {
  return radiusCircle * radiusCircle * pi;
}

console.groupEnd();

//here we interact with HTML
//square
function calculatePerimeterSquare() {
  const input = document.getElementById("InputSquare");
  const value = parseInt(input.value);
  const perimeter = perimeterSquare(value);
  alert(perimeter);
}

function calculateAreaSquare() {
  const input = document.getElementById("InputSquare");
  const value = parseInt(input.value);
  const area = areaSquare(value);
  alert(area);
}

//triangle
function calculatePerimeterTriangle() {
  const input1 = document.getElementById("InputSide1");
  const valueSide1 = parseInt(input1.value);
  const input2 = document.getElementById("InputSide2");
  const valueSide2 = parseInt(input2.value);
  const base = document.getElementById("InputBase");
  const valueBase = parseInt(base.value);
  const perimetro = perimeterTriangle(valueSide1, valueSide2, valueBase);
  alert(perimetro);
}

//circle
