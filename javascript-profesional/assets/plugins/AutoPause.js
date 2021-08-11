class AutoPause {
  /* since this.threshold will be a value, which we will use in const observer and in handleIntersection(),  
    we have to create a constructor and define what the threshold is going to do.
 */
  constructor() {
    //is less then 25% of the screen stop video
    this.threshold = 0.25;
    //set this permanently on the instance of the object.
    //now, whenever the function handleIntersection() is called, this is going to refer to the plugin instance
    this.handleIntersection = this.handleIntersection.bind(this);
  }

  run(player) {
    /* need to be able to play or pause the player. Therefore, we have to store the player in an instance of the class */
    this.player = player;

    /* IntersectionObserver receives two arguments: 1. Handler: It's a function (handler.Interception method) 
    that's going to receive the notification: "there was an intersection in the element you're looking at"  
    2. configuration object: have to pass a threshold (umbral in spanish)
    threshold is going to define what percentage of the element has to intersect with container in order to warn you
   */
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    //observe media element and container is whole screen
    observer.observe(this.player.media);
  }

  handleIntersection(entries) {
    /* When InterceptionObserver calls handler intersection it's going to pass it a list of entries, 
    which are all the objects we are observing: In this case there is only one object we are observing */
    const entry = entries[0];
    /*     console.log(entry); IntersectionObserverEntry {time: 72.3999999994412, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly, intersectionRect: DOMRectReadOnly, isIntersecting: true, …}
    if we move screen up and down we see warnings
     */
    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
