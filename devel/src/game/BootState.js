module.exports = {
	init: function() {
		//scaling settings
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.scale.compatibility.scrollTo = false;
	},
	preload: function() {
		
		//load minimal assets before loading screen
		this.load.text('settings', './game-assets/settings.json');
		this.load.image('preloadBar','./game-assets/preload-bar.png');
		this.load.image('cat','./game-assets/cat.png');
		
		console.log("Boot state finished.");
	},
	create: function() {
		this.game.stage.backgroundColor = "#12126c";
		this.state.start('PreloadState');
	}
};