"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//Superclass
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    /*  set id(id: number) {
      this._id = id;
    } */
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
class Picture extends Item {
    constructor(id, title, orientation) {
        //need to invoke constructor of superclass
        super(id, title); //constructor of superclass
        this._orientation = orientation;
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
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this.pictures = [];
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
//Access private members and assigning a new value
//picture.id = 100; //Cannot assign to 'id' because it is a read-only property. We cannot modify its state.
picture.title = "Sunset"; //private //set title("Sunset")
album.title = "Personal activities";
console.log("album", album); //album Album { _id: 1, _title: 'Personal activities',  pictures: [ Picture { _id: 100, _title: 'Sunset', _orientation: 2 } ] }
//const item = new Item(1, "Test title"); //Cannot create an instance of an abstract class.
//console.log("item", item);
//Try static member
console.log("PhotoOrientation", Picture.photoOrientation.Landscape); //PhotoOrientation 0
//we access a member of photOrientation through the name of the class
