export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

//get and set

class Picture {
  //Properties
  private _id: number; //have to put _, because cannot be called like get id()
  private _title: string;
  private _orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id;
    this._title = title;
    this._orientation = orientation;
  }

  get id() {
    return this._id;
  }
  //this method changes the state of the id
  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get orientation() {
    return this._orientation;
  }

  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation;
  }

  public toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

class Album {
  private _id: number;
  private _title: string;
  private pictures: Picture[];

  public constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
    this.pictures = [];
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(1, "Personal Pictures");
const picture: Picture = new Picture(1, "Beach side", PhotoOrientation.Square);
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
