//to add ads at the bottom of the video we need a container around the video
//and another container at the bottom of the video

import MediaPlayer from "../../MediaPlayer";
import Ads, { Ad } from "./Ads";

class AdsPlugin {
  private ads: Ads;
  private player: MediaPlayer;
  private media: HTMLMediaElement;
  private currentAd: Ad;
  private adsContainer: HTMLElement;

  constructor() {
    //we also want an instance of Ads
    //remember: is a singleton, so there is no public constructor, have to use getInstance() method
    this.ads = Ads.getInstance();
    //create another container for the ads
    this.adsContainer = document.createElement("div");
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
  }
  //all plugins have method run
  run(player: MediaPlayer) {
    //we want to safe player in this.player etc.
    this.player = player;
    this.player.container.appendChild(this.adsContainer);
    this.media = this.player.media;
    //HTMLMediaElement have an event called timeupdate, use this to do different actions
    this.media.addEventListener("timeupdate", this.handleTimeUpdate);
  }

  //every 30 seconds we will display one
  private handleTimeUpdate() {
    //we want a value without decimals
    const currentTime = Math.floor(this.media.currentTime);
    //if we can divide it through 30
    if (currentTime % 30 === 0) {
      //then we want to display an ad
      this.renderAd();
    }
  }

  private renderAd() {
    //if we already have a current ad, do not show other ad
    if (this.currentAd) {
      return;
    }
    //take one ad
    const ad = this.ads.getAd();
    this.currentAd = ad;
    //structure of add, link so if we click on ad sends us to the ad page
    this.adsContainer.innerHTML = `
        <div class="ads">
            <a class="ads__link" href="${this.currentAd.url}" target="_blank">
                <img class="ads__img" src="${this.currentAd.imageUrl}" />
                <div class="ads__info">
                    <h5 class="ads__title">${this.currentAd.title}</h5>
                    <p class="ads__body">${this.currentAd.body}</p>
                </div>
            </a>
        </div>
        `;

    //we do not want it forever, after 10 seconds we empty adsContainer and set currentAd to null => the ad disappears
    //each 30 seconds will appear a different ad
    setTimeout(() => {
      this.currentAd = null;
      this.adsContainer.innerHTML = "";
    }, 10000);
  }
}

export default AdsPlugin;
