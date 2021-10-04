// function to show a photo
export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
  console.log(
    `[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`
  );
}

let myPic = {
  title: "Test Title",
  date: "2021-09-22",
  orientation: PhotoOrientation.Landscape,
};

showPicture(myPic); //[title: Test Title, date: 2021-09-22, orientation: 0]
//anonymous object
showPicture({
  title: "Test",
  date: "2021-07-28",
  orientation: PhotoOrientation.Panorama,
  //extra: "test", //Object literal may only specify known properties, and 'extra' does not exist in type
}); //[title: Test, date: 2021-07-28, orientation: 3]

//optional properties
interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  const picture = { title: "Default", date: "2021-09" };
  if (config.title) {
    picture.title = config.title;
  }
  if (config.date) {
    picture.date = config.date;
  }
  return picture;
}

let picture = generatePicture({}); //since it is an empty object it creates an default object
console.log("picture", picture); //picture { title: 'Default', date: '2021-09' }
picture = generatePicture({ title: "Travel pic" });
console.log("picture", picture); //picture { title: 'Travel pic', date: '2021-09' }
picture = generatePicture({ title: "Travel pic", date: "2021-05-26" });
console.log("picture", picture); //picture { title: 'Travel pic', date: '2021-05-26' }

//Interface readonly: user
interface User {
  readonly id: number;
  readonly username: string;
  readonly isPro: boolean;
}

let user: User;
user = {
  id: 10,
  username: "camilla-bachna",
  isPro: true,
};

console.log("user", user); //user { id: 10, username: 'camilla-bachna', isPro: true }
//user.username = "paparazzi"; //Error Cannot assign to 'username' because it is a read-only property.
//console.log("user", user); //user { id: 10, username: 'paparazzi', isPro: true } without readonly
