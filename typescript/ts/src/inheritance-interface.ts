export {};

//extension interface
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Entity {
  id: number;
  title: string;
}

interface Album extends Entity {
  //copy of attributes of Entity
  description: string;
}

interface Picture extends Entity {
  orientation: PhotoOrientation;
}

const album: Album = {
  id: 6,
  title: "Meetups",
  description: "Community events around the world",
};

const picture: Picture = {
  id: 11,
  title: "Family",
  orientation: PhotoOrientation.Portrait,
};

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = "Moon";

console.log("album", album); //album {  id: 6, title: 'Meetups',  description: 'Community events around the world' }
console.log("picture", picture); //picture { id: 11, title: 'Family', orientation: 1 }
console.log("newPicture", newPicture); //newPicture { id: 2, title: 'Moon' }
