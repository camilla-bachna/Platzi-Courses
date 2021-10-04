"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const album_1 = require("./album");
const picture_1 = require("./picture");
const photo_orientation_1 = require("./photo-orientation");
const user = new user_1.User(1, "luixaviles", "Luis", true);
const album = new album_1.Album(100, "Vacation");
const picture = new picture_1.Picture(2, "South Africa", "2016", photo_orientation_1.PhotoOrientation.Panorama);
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
