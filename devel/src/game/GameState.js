module.exports =  {
	TYPE_METEOR: 0,
	TYPE_DONUT: 0x80,
	TYPE_COFFE: 0x81,
	TYPE_PIZZA: 0x82,
	TYPE_DRUG: 0xFF,
	init: function(audio) {
		this.audio = audio;
	},
	create: function() {

		//parsing settings
		this.settings = JSON.parse(this.game.cache.getText('settings'));
		console.log("Settings has been loaded and parsed: ", this.settings);

		//physics settings
		this.game.physics.arcade.gravity.y = this.settings.gravity;

		//backgrounds & world settings
		this.game.background = this.game.add.sprite(0, 0, 'background');
		this.game.background.width = this.settings.worldWidth;
		this.game.background.height = this.settings.worldHeight;
		this.game.world.setBounds(0, 0, this.settings.worldWidth, this.settings.worldHeight);

		//marble filter
		this.stonnedFilter = this.game.add.filter('Marble', 960, 540);

		//platform
		this.platform = this.add.sprite(0, this.game.world.height, 'platform');
		this.platform.anchor.setTo(0,1);
		this.game.physics.enable(this.platform);
		this.platform.body.allowGravity = false;
		this.platform.body.immovable = true;

		//player
		this.player = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
		this.player.anchor.setTo(0.5,1);
		this.player.scale.setTo(0.3);
		this.game.physics.enable(this.player);
		this.player.body.collideWorldBounds = true;
    this.player.body.velocity.x = (this.game.rnd.integerInRange(0, 10) > 5) ? this.settings.velocityLeft : this.settings.velocityRight;
    this.player.animations.add('flying', [0,1,2,3], 4, true);
		this.player.animations.play('flying');

		//flying objects (enemies and friends also)
		this.flyingObjects = this.add.group();
		this.flyingObjects.enableBody = true;

		//adding flying object creator function and set up the loop
		this.flyingObjectCreator = this.game.time.events.loop(this.settings.initialDelay, this.createFlyingObject, this);
		this.createFlyingObject(); //we don't want to wait we need a flying object just after the game has begun.

		//setting up player default
		this.speed = this.settings.initialSpeed;
		this.player.isStonned = false;
    this.player.power = this.settings.initialPower;
    this.player.score = 0;

    //status
    this.powerIcon = this.add.sprite(this.game.world.width - 16, 24, 'powerIcon');
    this.powerIcon.scale.set(0.125); //cca 32px
    this.powerIcon.anchor.set(1, 0);
    this.powerText = this.game.add.text(this.game.world.width - 64, this.powerIcon.centerY, this.player.power, this.settings.powerStyle);
    this.powerText.anchor.set(1, 0.5);

    this.scoreIcon = this.add.sprite(this.game.world.width - 16, 64, 'scoreIcon');
    this.scoreIcon.scale.set(0.125); //cca 32px
    this.scoreIcon.anchor.set(1, 0);
    this.scoreText = this.game.add.text(this.game.world.width - 64, this.scoreIcon.centerY, this.player.score, this.settings.scoreStyle);
    this.scoreText.anchor.set(1, 0.5);

		this.updateStatus();

		//add buttons (pause, sc and volume switch)
		this.stopButton = this.game.add.button(0, this.game.world.height, 'stopButton', function() {
			if (this.game.stopped) {
				this.stopButton.loadTexture('stopButton', 0);
				this.resumeGame();
			} else {
				this.stopButton.loadTexture('resumeButton', 0);
				this.stopGame(true);
			}
			console.log("Stop button pressed. stopped: ", this.game.stopped);
		}, this);
		this.stopButton.anchor.setTo(0,1);

		this.audioButton = this.game.add.button(this.game.world.width, this.game.world.height, 'audioOnButton', function() {
			if (!this.game.stopped) {
				if (this.audio.music.isPlaying) {
					this.audioButton.loadTexture('audioOffButton', 0);
					this.audio.music.pause();
          this.audioIsMuted = true;
				} else {
					this.audioButton.loadTexture('audioOnButton', 0);
					this.audio.music.resume();
					this.audioIsMuted = false;
				}
			}
		}, this);
		this.audioButton.anchor.setTo(1,1);

		//music copyright text
    this.copyrightText = this.game.add.text(this.game.world.centerX, this.game.world.height, "Music: SwingJeDing from ロッコ by RoccoW", this.settings.copyrightStyle);
    this.copyrightText.anchor.set(0.5, 1);

		//inputs
		this.inputHandler = new Swipe(this.game);
	},
	stopGame: function(pauseMusic) {
		//storeing values
		this.beforeStop = {
			playerVelocityX: this.player.body.velocity.x,
			gravityY: this.game.physics.arcade.gravity.y,
		}

		//stopping
		this.player.body.velocity.x = 0
		this.player.animations.stop();

		this.game.physics.arcade.gravity.y = 0
		this.flyingObjects.forEach(function(item){
			item.body.velocity.y = 0;
			item.animations.stop();
		}, this);

		if (pauseMusic) { this.audio.music.pause(); }
		this.game.stopped = true;
	},
	resumeGame: function() {

		//restarting
		this.player.body.velocity.x = this.beforeStop.playerVelocityX
		this.player.animations.play('flying');

		this.game.physics.arcade.gravity.y = this.beforeStop.gravityY
		this.flyingObjects.forEach(function(item){
			item.body.velocity.y = this.speed;
			item.animations.play('flying');
		}, this);

		if (!this.audioIsMuted) { this.audio.music.resume(); }
		this.game.stopped = false;
	},
	getPos: function() {
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		var bt = document.body.getBoundingClientRect().top;
		var gcr = document.getElementById('gameContainer').getBoundingClientRect();

		return {"bodyTop": bt, "gameContainerRect": gcr, "windowTop": t}
	},
	scroll: function(direction) {
		var pos = this.getPos();
		if (pos.gameContainerRect.top == 0) {
			window.scrollBy(0,pos.gameContainerRect.height * direction);
		} else {
			window.scrollBy(0,pos.gameContainerRect.top);
		}
	},
	update: function() {

	  if (this.game.background.filters) {
      this.stonnedFilter.update();
    }

    if (!this.game.stopped) {
      this.game.physics.arcade.collide(this.player, this.platform);
      this.game.physics.arcade.overlap(this.player, this.flyingObjects, this.overlap, this.overlapProcess, this);
    }

    const input = this.inputHandler.check();
    if (input !== null) {

      switch (input.direction) {
        case this.inputHandler.DIRECTION_LEFT:
          if (!this.game.stopped) { this.player.body.velocity.x = this.settings.velocityLeft; }
          break;
        case this.inputHandler.DIRECTION_RIGHT:
          if (!this.game.stopped) { this.player.body.velocity.x = this.settings.velocityRight; }
          break;

        //moving down
        case this.inputHandler.DIRECTION_UP:
          this.scroll(1);
          break;
        case this.inputHandler.DIRECTION_UP_LEFT:
          this.scroll(1);
          break;
        case this.inputHandler.DIRECTION_UP_RIGHT:
          this.scroll(1);
          break;

        //moving up
        case this.inputHandler.DIRECTION_DOWN:
          this.scroll(-1);
          break;
        case this.inputHandler.DIRECTION_DOWN_LEFT:
          this.scroll(-1);
          break;
        case this.inputHandler.DIRECTION_DOWN_RIGHT:
          this.scroll(-1);
          break;

        default:
          console.log("Non-controlling event: ", input.direction);
          break;
      }
    }

    //handling flying object outside the world
    if (!this.game.stopped) {
      this.flyingObjects.forEachAlive(function (fo) {
        if (fo.position.y > this.game.world.height + fo.height) {
          this.killFlyingObject(fo, this);
        }
      }, this)
    }

    //is the player still alive?
    if (this.player.power < 0) {
      if (!this.game.stopped) { this.gameOver(); }
    }
	},
	killFlyingObject(flyingObject) {

		flyingObject.kill();

		this.player.score += this.settings.scoreIncrease;
		this.flyingObjectCreator.delay -= this.settings.delayDecrease;
		if (this.flyingObjectCreator.delay < this.settings.minDelay) { this.flyingObjectCreator.delay = this.settings.minDelay }

		this.updateStatus(this);
	},
	createFlyingObject() {

		if (!this.game.stopped) {

			//checking the count of living objects
			if (this.flyingObjects.countLiving() < this.settings.maxCountLiving) {

				//get or create a flying object
				var flyingObject = this.flyingObjects.getFirstExists(false);
				const px = this.game.world.randomX;

				if (!flyingObject) {
					//creating a new flying object and setting up properties
					flyingObject = this.flyingObjects.create(px, -200, 'meteor'); //-this.game.cache.getImage("meteor").height
          this.flyingObjects.add(flyingObject);
				} else {
					flyingObject.reset(px, -200);
				}
				flyingObject.body.allowGravity = false;
				flyingObject.body.velocity.y = this.speed;

				//will the flying object be our friend?
				var rnd = Math.random();
				if (rnd > 0.80) {
					if (rnd < 0.85) {
						//0.8 - 0.85
						flyingObject.loadTexture('donut', 0);
						flyingObject.body.setSize(256,this.game.cache.getImage("donut").height,0,0);
						flyingObject.scale.setTo(0.2);
            flyingObject.animations.add('flying', [0,1,2,3,4,5], 6, true);
            flyingObject.animations.play('flying');
						flyingObject.type = this.TYPE_DONUT;
					} else if (rnd < 0.90) {
						//0.85 - 0.9
						flyingObject.loadTexture('pizza', 0);
						flyingObject.body.setSize(256,this.game.cache.getImage("pizza").height,0,0);
						flyingObject.scale.setTo(0.2);
            flyingObject.animations.add('flying', [0,1,2,3,4,3,2], 6, true);
            flyingObject.animations.play('flying');
						flyingObject.type = this.TYPE_PIZZA;
					} else if (rnd < 0.95) {
						//0.95 - 0.95
						flyingObject.loadTexture('coffe', 0);
						flyingObject.body.setSize(256,this.game.cache.getImage("coffe").height,0,0);
						flyingObject.scale.setTo(0.2);
            flyingObject.animations.add('flying', [0,1,2,3], 6, true);
            flyingObject.animations.play('flying');
						flyingObject.type = this.TYPE_COFFE;
					} else {
						//over 0.95
						flyingObject.loadTexture('mushroom', 0);
						flyingObject.body.setSize(256,this.game.cache.getImage("mushroom").height,0,0);
						flyingObject.scale.setTo(0.2);
						flyingObject.animations.add('flying', [0,1,2,3], 6, true);
						flyingObject.animations.play('flying');
						flyingObject.type = this.TYPE_DRUG;
					}
				} else {
					flyingObject.loadTexture('meteor', 0);
					flyingObject.body.setSize(96,this.game.cache.getImage("meteor").height,0,0);
					flyingObject.scale.setTo(0.5);
					flyingObject.animations.add('flying', [0,1,2,3,4,5], 6, true);
					flyingObject.animations.play('flying');
					flyingObject.type = this.TYPE_METEOR;
				}

			} else {
				console.log("Maximum living object count reached. Creation skipped.");
			}
		}
	},
	overlapProcess: function(player, flyingObject) {
		return true;
	},
  playAudio: function(audio) {

	  if (!this.audioIsMuted) {

	    /* progressive volume handling disabled :)
	    this.audio.music.volume = 0.5;
      audio.onStop.add(function () {
        this.audio.music.volume = 1;
      }, this);*/

      audio.play();
    }
  },
	overlap: function(player, flyingObject) {

	  switch (flyingObject.type) {
		case this.TYPE_METEOR:
			if (!this.player.isStonned) {
				this.player.power -= this.settings.powerDecrease;
        this.playAudio(this.audio.injury);
			} else {
        this.player.power += this.settings.powerDecrease; //!!!increase in this case!
				this.player.score += this.settings.stonnedScoreIncrease;
				flyingObject.kill();
        this.playAudio(this.audio.bonus);
			}
		break;
      case this.TYPE_PIZZA:
			flyingObject.kill();
			this.player.score += this.settings.scoreIncrease * 17;
			this.playAudio(this.audio.bonus);
		break;
		case this.TYPE_DONUT:
			flyingObject.kill();
			this.player.score += this.settings.scoreIncrease * 11;
      this.playAudio(this.audio.bonus);
		break;
		case this.TYPE_COFFE:
			flyingObject.kill();
			this.player.score += this.settings.scoreIncrease * 13;
      this.playAudio(this.audio.bonus);
		break;
		case this.TYPE_DRUG:
			flyingObject.kill();

			console.log("DRUG overlapped. isStonned:", this.player.isStonned);

			if (!this.player.isStonned) {

				this.player.power += this.settings.powerIncrease;
				this.game.background.filters = [this.stonnedFilter];
				this.audio.music._sound.playbackRate.value = 0.8;
				this.player.isStonned = true;
				console.log("Player set to stonned.");

				this.game.time.events.add(this.settings.stonnedInterval, function() {
					this.audio.music._sound.playbackRate.value = 1;
					this.game.background.filters = null;
					this.player.isStonned = false;
					console.log("Player set back to normal");
				}, this);

        this.playAudio(this.audio.drug);
			} else {

        this.player.score += this.settings.stonnedScoreIncrease * 3;

        console.log("Drug again, overdose! :)");
			  this.playAudio(this.audio.overdose);
      }
		break;
		}

		this.updateStatus();
	},
	updateStatus: function() {
	  this.powerText.setText(this.player.power);
	  this.scoreText.setText(this.player.score);
	},
	gameOver: function() {
    console.log("GameOver called");
		this.stopGame(false);
		if (this.audio.music.isPlaying) {
      this.audio.music.onFadeComplete.add(function (sound, volume) {
        this.startHomeState();
      }, this);
      this.audio.music.fadeOut(1000);
    } else {
      this.startHomeState();
    }
	},
  startHomeState: function() {
	  this.game.state.start("HomeState", true, false, "!!! GAME OVER :( !!!");
  },
  render: function() {
	  /*this.flyingObjects.forEach(function(elem){
      game.debug.body(elem);
    });*/
  }
};
