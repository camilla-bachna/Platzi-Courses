"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, username, firstName, isPro) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.isPro = isPro;
        this.album = [];
    }
    addAlbum(album) {
        this.album.push(album);
    }
    removeAlbum(album) {
        //returns Album or undefined => if we send an album that is not part of our data structure this function will surely return undefined.
        //search album
        const index = this.album.findIndex((a) => a.id === album.id);
        let deletedAlbum;
        if (index >= 0) {
            deletedAlbum = this.album[index]; //access element via its position
            this.album.splice(index, 1); //delete one element of our array (position, how many objects we want to eliminate)
        }
        return deletedAlbum;
    }
}
exports.User = User;
