module.exports =  {
	init: function(message) {
		this.message = message;
	},
	preload: function() {
		//settings
		this.settings = JSON.parse(this.game.cache.getText('settings'));

		//set up background
		this.background = this.game.add.sprite(0, 0, 'background');
		this.background.width = this.game.width;
		this.background.height = this.game.height;

		//audio
    this.audio = {
      music: this.game.add.audio('music'),
      injury: this.game.add.audio('injury'),
      bonus: this.game.add.audio('bonus'),
      drug: this.game.add.audio('drug'),
      overdose: this.game.add.audio('overdose')
    }

		//starting physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
	},
	create: function() {

	  var starTextYOffset = 0;
	  if (this.message) {
      const messageText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, this.message, this.settings.textStyle);
      messageText.anchor.setTo(0.5);
      starTextYOffset = 48;
    }
		const startText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + starTextYOffset, "CLICK OR TOUCH TO START!", this.settings.textStyle);
    startText.anchor.setTo(0.5);

    const controlText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + starTextYOffset + 48, "Use < or > keys or swipe to move the cat", this.settings.controlTextStyle);
    controlText.anchor.setTo(0.5);

		this.game.stopped = false;

		//waiting for a click to start
		this.background.inputEnabled = true;
		this.background.events.onInputDown.add(function(){
			//NOTE: we need to start by a user interaction, otherwise audio will not palyed on iOS 9+
			this.audio.music.loopFull();
      this.audio.music.volume = 0.7;
			this.audio.music.play();
			this.background.events.onInputDown.removeAll();
			this.state.start("GameState", true, false, this.audio);
		}, this);
	}
};
