"use strict";

import MediaPlayer from "./MediaPlayer"; //import MediaPlayer, { foo } from "./MediaPlayer";

const video = document.querySelector(".movie");
const button = document.querySelector(".button");

//create instance of prototype MediaPlayer
/* one object instead of multiple arguments so we can better understand how our code works, 
e.g. new MediaPlayer({ element: video, title: "My favorite video", autoplay: true }); */
const player = new MediaPlayer({ el: video });

button.onclick = () => player.togglePlay();
