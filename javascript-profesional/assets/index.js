"use strict";

import MediaPlayer from "./MediaPlayer.js"; //import MediaPlayer, { foo } from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector(".movie");
const button = document.querySelector(".button");
const unmuteButton = document.querySelector(".unmuteButton");

//create instance of prototype MediaPlayer
/* one object instead of multiple arguments so we can better understand how our code works, 
e.g. new MediaPlayer({ element: video, title: "My favorite video", autoplay: true }); */
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] }); //AutoPlay is a plugin, a plugin is a class, instantiate it

button.onclick = () => player.togglePlay(); //start / pause video when clicking on button
video.onclick = () => player.togglePlay(); //start / pause video when clicking on video

unmuteButton.onclick = () => player.toggleMute();
