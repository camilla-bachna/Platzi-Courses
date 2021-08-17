"use strict";

/* if we do not use the keyword class, ts will not consider it as a type
but one of the advantages of ts is that we can refactor:
if we put the cursor over MediaPlayer is says "This constructor function may be converted to a class declaration." =>
click on Quick Fix
 */

class MediaPlayer {
  //when we have the tag video in HTML, this represents video element;
  //video element and audio element are inherited from HTMLMediaElement (basic type of HTML) is right away available
  //do not have to import anything
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  initPlayer() {
    //we want the container on the side of media 
    this.container = document.createElement("div");
    //to be able to use position absolute for ads the container needs to have position relative
    this.container.style.position = "relative";
    //container before media
    this.media.parentNode.insertBefore(this.container, this.media);
    //container will have a child => put media inside
    this.container.appendChild(this.media);
  }

  private initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  togglePlay() {
    this.media.paused ? this.media.play() : this.media.pause();
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }
  toggleMute() {
    this.media.muted = !this.media.muted;
  }

  volumeUp() {
    this.media.volume += 0.05;
  }

  volumeDown() {
    this.media.volume -= 0.05;
  }
}

export default MediaPlayer;
