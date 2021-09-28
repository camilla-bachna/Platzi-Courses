"use strict";
//Orientation for photos
/* const landscape = 0;
const portrait = 1;
const square = 2;
const panorama = 3; */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.Landscape;
console.log("landscape", landscape); //landscape 0
console.log("landscape", PhotoOrientation[0]); //landscape Landscape
console.log("landscape", PhotoOrientation[landscape]); //landscape Landscape
//personalize indices
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
console.log("portrait", PictureOrientation.Portrait); //portrait 11
/* Its the same logic as { key, value },
its an Object that has as key the texts that we declare and the indices that are self-defined or defined */
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
    Country["Espana"] = "esp";
})(Country || (Country = {}));
var countries = __assign({}, Country);
console.log(countries);
/* {
  Bolivia: 'bol',
  Colombia: 'col',
  Mexico: 'mex',
  EEUU: 'usa',
  Espana: 'esp'
} */
var country = Country.Colombia;
console.log("country", country); //country col
//! Country.Mexico = 'MX' //!This gives an error, we cannot modify its value.
