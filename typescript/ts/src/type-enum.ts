//Orientation for photos
/* const landscape = 0;
const portrait = 1;
const square = 2;
const panorama = 3; */

enum PhotoOrientation {
  Landscape, //position 0
  Portrait, //position 1
  Square, //position 2
  Panorama, //position 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log("landscape", landscape); //landscape 0
console.log("landscape", PhotoOrientation[0]); //landscape Landscape
console.log("landscape", PhotoOrientation[landscape]); //landscape Landscape

//personalize indices

enum PictureOrientation {
  Landscape = 10, //position 10
  Portrait, //11
  Square, //12
  Panorama, //13
}

console.log("portrait", PictureOrientation.Portrait); //portrait 11

/* Its the same logic as { key, value }, 
its an Object that has as key the texts that we declare and the indices that are self-defined or defined */
enum Country {
  Bolivia = "bol",
  Colombia = "col",
  Mexico = "mex",
  EEUU = "usa",
  Espana = "esp",
}

const countries = {
  ...Country,
};

console.log(countries);
/* {
  Bolivia: 'bol',
  Colombia: 'col',
  Mexico: 'mex',
  EEUU: 'usa',
  Espana: 'esp'
} */

const country: Country = Country.Colombia;
console.log("country", country); //country col
//! Country.Mexico = 'MX' //!This gives an error, we cannot modify its value.
