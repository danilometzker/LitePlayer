class LitePlayer {
  options = {
    container: false,
    src: false,
    pauseClass: "mdi mdi-pause",
    playClass: "mdi mdi-play",
    replayClass: "mdi mdi-replay",
    volumeOnClass: "mdi mdi-volume-high",
    volumeOffClass: "mdi mdi-volume-off",
    fullscreenClass: "mdi mdi-fullscreen",
    exitFullscreenClass: "mdi mdi-fullscreen-exit",
    autoplay: true,
    poster: false,
    customOverlay: "",
  };

  constructor(options = false) {
    var player = this;

    const addElements = (div) => {
      let playButton = document.createElement("div");
      playButton.setAttribute("class", this.options.playClass);
      let pauseButton = document.createElement("div");
      pauseButton.setAttribute("class", this.options.pauseClass);
      div.appendChild(playButton);
      div.appendChild(pauseButton);
    };

    let controls = document.createElement("div");
    addElements(controls);

    if (options) player.options = Object.assign(player.options, options);

    player.container = document.querySelector(this.options.container);
    player.container.classList.add("liteplayer");

    player.video = document.createElement("video");
    player.video.classList.add("lp-video");
    player.video.src = player.options.src;
    player.video.autoplay = false;
    player.video.controls = false;

    player.container.appendChild(player.video);
    player.container.appendChild(controls);
    player.video.load();
  }

  play() {
    this.video.play();
  }

  pause() {
    this.video.pause();
  }

  reload() {
    this.video.currentTime = 0;
    this.video.play();
  }
}
