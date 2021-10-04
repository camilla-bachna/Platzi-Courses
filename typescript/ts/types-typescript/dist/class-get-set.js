"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//get and set
class Picture {
    constructor(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    get id() {
        return this._id;
    }
    //this method changes the state of the id
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}
class Album {
    constructor(id, title) {
        this._id = id;
        this._title = title;
        this.pictures = [];
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, "Personal Pictures");
const picture = new Picture(1, "Beach side", PhotoOrientation.Square);
album.addPicture(picture);
console.log("album", album); //album Album {_id: 1, _title: 'Personal Pictures',  pictures: [ Picture { _id: 1, _title: 'Beach side', _orientation: 2 } ] }
console.log("picture.id", picture.id); //invoking method get id(), reading current status, not giving a new value
//picture.id 1
//Access private members
//assigning a new value
picture.id = 100; //private //set id(100)
picture.title = "Sunset"; //private //set title("Sunset")
album.title = "Personal activities";
console.log("album", album); //album Album { _id: 1, _title: 'Personal activities',  pictures: [ Picture { _id: 100, _title: 'Sunset', _orientation: 2 } ] }
