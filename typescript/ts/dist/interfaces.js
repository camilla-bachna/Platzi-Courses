"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
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
function generatePicture(config) {
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
let user;
user = {
    id: 10,
    username: "camilla-bachna",
    isPro: true,
};
console.log("user", user); //user { id: 10, username: 'camilla-bachna', isPro: true }
//user.username = "paparazzi"; //Error Cannot assign to 'username' because it is a read-only property.
//console.log("user", user); //user { id: 10, username: 'paparazzi', isPro: true } without readonly
