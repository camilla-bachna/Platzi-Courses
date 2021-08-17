"use strict";
//appears an error when changing to ts, just remove js
import MediaPlayer from "./MediaPlayer"; 
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads";

const video: HTMLElement = document.querySelector(".movie");
const buttonPlay: HTMLElement = document.querySelector(".play-pause");
const buttonMute: HTMLElement = document.querySelector(".mute-unmute");
const buttonVolumeUp: HTMLElement = document.querySelector(".volume-up");
const buttonVolumeDown: HTMLElement = document.querySelector(".volume-down");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
}); 

buttonPlay.onclick = () => player.togglePlay(); 
video.onclick = () => player.togglePlay(); 

buttonMute.onclick = () => player.toggleMute();

buttonVolumeUp.onclick = () => player.volumeUp();
buttonVolumeDown.onclick = () => player.volumeDown();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}

//if there are still errors after changing everything to ts, reinitialize and rm -rf .cache dist
//Application => clear storage => clear site data (will delete the script, service worker, cache)