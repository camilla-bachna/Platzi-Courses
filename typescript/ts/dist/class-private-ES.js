"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Private members ECMAScript
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var Picture = /** @class */ (function () {
    function Picture(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    Picture.prototype.toString = function () {
        return "[id: " + this.id + ", title: " + this.title + ", orientation: " + this.orientation + "]";
    };
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    Album.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return Album;
}());
var album = new Album(1, "Personal Pictures");
var picture = new Picture(1, "Beach side", PhotoOrientation.Square);
album.addPicture(picture);
console.log("album", album); //album Album { id: 1,  title: 'Personal Pictures', pictures: [ Picture { id: 1, title: 'Beach side', orientation: 2 } ] }
//console.table(album);
//console.table(album.pictures);
//picture.id = 100; //Error: Property 'id' is private and only accessible within class 'Picture'.
//picture.title = "Sunset"; //Error
//album.title = "Personal activities"; //Error
