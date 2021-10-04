export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  //Properties
  public id: number; //not necessary to write public, is public by default
  public title: string;
  public orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  //behavior
  public toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

class Album {
  public id: number;
  public title: string;
  public pictures: Picture[];

  public constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(1, "Personal Pictures");
const picture: Picture = new Picture(1, "Beach side", PhotoOrientation.Square);
album.addPicture(picture); //like this we relate album with picture

console.log("album", album); //album Album { id: 1,  title: 'Personal Pictures', pictures: [ Picture { id: 1, title: 'Beach side', orientation: 2 } ] }
//console.table(album);
//console.table(album.pictures);

//Accessing public members of class
picture.id = 100; //public
picture.title = "Sunset"; //public
album.title = "Personal activities";

console.log("album", album); //album Album { id: 1, title: 'Personal activities', pictures: [ Picture { id: 100, title: 'Sunset', orientation: 2 } ] }
