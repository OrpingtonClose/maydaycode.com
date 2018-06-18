module.exports =  {
	preload: function() {
		//loading filter
		//this.load.script('filter', 'game/Marble.js');

		//game logo to center of the game screen
		this.loadingLogo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'cat');
		this.loadingLogo.anchor.setTo(0.5);

		//set loading indicator
		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadBar');
		this.preloadBar.anchor.setTo(0.5);
		this.load.setPreloadSprite(this.preloadBar);

		//filters
		this.load.script('filter', './game-assets/Marble.js');

		//audio
		this.load.audio('music', ['./game-assets/roccow-swing-je-ding.mp3','./game-assets/roccow-swing-je-ding.ogg']);
    this.load.audio('injury', ['./game-assets/auch.mp3','./game-assets/auch.ogg']);
    this.load.audio('bonus', ['./game-assets/power-up-bright-a.mp3','./game-assets/power-up-bright-a.ogg']);
    this.load.audio('drug', ['./game-assets/wow-i-love-this-shit.mp3','./game-assets/wow-i-love-this-shit.ogg']);
    this.load.audio('overdose', ['./game-assets/wow-this-shit-again.mp3','./game-assets/wow-this-shit-again.ogg']);

    //images
		this.load.image("background", './game-assets/blue-space.png');
		this.load.image('platform', './game-assets/empty-960x50.png');
		this.load.image('stopButton', './game-assets/stop-button.png');
    this.load.image("powerIcon", './game-assets/heart.png');
    this.load.image('scoreIcon', './game-assets/star-icon.png');
		this.load.image('resumeButton', './game-assets/resume-button.png');
		this.load.image('audioOnButton', './game-assets/audio-on-button.png');
		this.load.image('audioOffButton', './game-assets/audio-off-button.png');

		//spritesheets
    this.load.spritesheet('coffe', './game-assets/coffe-sheet.png', 256, 256, 4);
		this.load.spritesheet('player', './game-assets/cat-sheet.png', 166, 256, 4);
		this.load.spritesheet('meteor', './game-assets/meteor-sheet.png', 96, 256, 6);
		this.load.spritesheet('mushroom', './game-assets/mushroom-sheet.png', 256, 256, 6);
    this.load.spritesheet('donut', './game-assets/donut-sheet.png', 256, 256, 6);
    this.load.spritesheet('pizza', './game-assets/pizza-sheet.png',256,256, 4);

		console.log("Preload state finished.");
	},
	create: function() {

		this.state.start('HomeState');
	}
};
