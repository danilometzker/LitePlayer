class LitePlayer{

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
		customOverlay: ""
	}

	constructor(options = false){
		var player = this;

		if(options) player.options = Object.assign(player.options, options);

		player.container = document.querySelector(this.options.container);
		player.container.classList.add('liteplayer');
		
		player.video = document.createElement('video');
		player.video.classList.add("lp-video");
		player.video.src = player.options.src;
		player.video.autoplay = false;
		player.video.controls = true;

		player.container.appendChild(player.video);
		player.video.load();
	}

	play(){
		this.video.play();
	}

	pause(){
		this.video.pause();
	}

	reload(){
		this.video.currentTime = 0;
		this.video.play();
	}

}