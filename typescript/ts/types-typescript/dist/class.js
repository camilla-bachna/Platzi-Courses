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
    //behavior
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
album.addPicture(picture); //like this we relate album with picture
console.log("album", album); //album Album { id: 1,  title: 'Personal Pictures', pictures: [ Picture { id: 1, title: 'Beach side', orientation: 2 } ] }
//console.table(album);
//console.table(album.pictures);
//Accessing public members of class
picture.id = 100; //public
picture.title = "Sunset"; //public
album.title = "Personal activities";
console.log("album", album); //album Album { id: 1, title: 'Personal activities', pictures: [ Picture { id: 100, title: 'Sunset', orientation: 2 } ] }
