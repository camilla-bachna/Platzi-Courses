"use strict";

import MediaPlayer from "./MediaPlayer.js"; //import MediaPlayer, { foo } from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector(".movie");
const buttonPlay = document.querySelector(".play-pause");
const buttonMute = document.querySelector(".mute-unmute");
const buttonVolumeUp = document.querySelector(".volume-up");
const buttonVolumeDown = document.querySelector(".volume-down");

//create instance of prototype MediaPlayer
/* one object instead of multiple arguments so we can better understand how our code works, 
e.g. new MediaPlayer({ element: video, title: "My favorite video", autoplay: true }); */
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
}); //AutoPlay and AutoPause are plugins, a plugin is a class, instantiate it

buttonPlay.onclick = () => player.togglePlay(); //start / pause video when clicking on button
video.onclick = () => player.togglePlay(); //start / pause video when clicking on video

buttonMute.onclick = () => player.toggleMute();

buttonVolumeUp.onclick = () => player.volumeUp();
buttonVolumeDown.onclick = () => player.volumeDown();

//this if will help us to detect if the user's browser supports the service workers
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}
