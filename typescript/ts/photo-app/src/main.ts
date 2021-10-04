import { User } from "./user";
import { Album } from "./album";
import { Picture } from "./picture";
import { PhotoOrientation } from "./photo-orientation";

const user = new User(1, "luixaviles", "Luis", true);
const album = new Album(100, "Vacation");
const picture = new Picture(
  2,
  "South Africa",
  "2016",
  PhotoOrientation.Panorama
);

//creating relations
user.addAlbum(album);
album.addPicture(picture);

console.log("user", user);

/* user User {
  id: 1,
  username: 'luixaviles',
  firstName: 'Luis',
  isPro: true,
  album: [ Album { id: 100, title: 'Vacation', picture: [Array] } ]
} */

//delete album
user.removeAlbum(album);
console.log("user", user);

/* user User {
  id: 1,
  username: 'luixaviles',
  firstName: 'Luis',
  isPro: true,
  album: []
} */
