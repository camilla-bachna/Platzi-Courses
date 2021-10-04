import { Album } from "./album";

export class User {
  private album: Album[];

  constructor(
    private id: number,
    private username: string,
    private firstName: string,
    private isPro: boolean
  ) {
    this.album = [];
  }

  addAlbum(album: Album) {
    this.album.push(album);
  }

  removeAlbum(album: Album): Album | undefined {
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
