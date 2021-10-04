"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}
class Album {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, "Personal Pictures");
const picture = new Picture(1, "Beach side", PhotoOrientation.Square);
album.addPicture(picture);
console.log("album", album); //album Album { id: 1,  title: 'Personal Pictures', pictures: [ Picture { id: 1, title: 'Beach side', orientation: 2 } ] }
//console.table(album);
//console.table(album.pictures);
//picture.id = 100; //Error: Property 'id' is private and only accessible within class 'Picture'.
//picture.title = "Sunset"; //Error
//album.title = "Personal activities"; //Error
