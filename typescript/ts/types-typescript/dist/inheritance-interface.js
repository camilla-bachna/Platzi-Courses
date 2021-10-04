"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//extension interface
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const album = {
    id: 6,
    title: "Meetups",
    description: "Community events around the world",
};
const picture = {
    id: 11,
    title: "Family",
    orientation: PhotoOrientation.Portrait,
};
let newPicture = {};
newPicture.id = 2;
newPicture.title = "Moon";
console.log("album", album); //album {  id: 6, title: 'Meetups',  description: 'Community events around the world' }
console.log("picture", picture); //picture { id: 11, title: 'Family', orientation: 1 }
console.log("newPicture", newPicture); //newPicture { id: 2, title: 'Moon' }
