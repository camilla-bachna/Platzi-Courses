"use strict";

import MediaPlayer from "../MediaPlayer";

/* Quick Fix to convert to a class */

class AutoPlay {
  constructor() {}
  run(player: MediaPlayer) {
    if (!player.media.muted) {
      player.media.muted = true;
    }
    player.play();
  }
}

export default AutoPlay;
