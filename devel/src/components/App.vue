<template v-cloak>
	<div>

		<!-- [STARS] -->
		<div class="star pulsing-star medium-star star-group-1" style="left:7%;top:12px"></div>
		<div class="star pulsing-star medium-star star-group-4" style="right:3%;top:92px"></div>
		<div class="star pulsing-star medium-star star-group-3" style="left:29%;top:59px"></div>
		<div class="star pulsing-star medium-star star-group-4" style="right:47%;top:39px"></div>
		<div class="star pulsing-star medium-star star-group-3" style="left:70%;top:37px"></div>
		<div class="star pulsing-star medium-star star-group-2" style="left:73%;top:49px"></div>
		<div class="star pulsing-star medium-star star-group-1" style="right:35%;top:12px"></div>
		<div class="star pulsing-star medium-star star-group-4" style="left:3%;top:249px"></div>
		<div class="star pulsing-star medium-star star-group-2" style="right:2%;top:139px"></div>
		<!-- [/STARS] -->

		<div class="stripe primary">
			<header id="header">

				<div id="menuLine" class="columns is-gapless is-marginless">
					<div class="column is-2-mobile is-1-tablet has-text-centered">
						<img src="../assets/logo.png" id="siteLogo" alt="Space Cat the logo of MayDayCode.com. It's a cute white cat wearing skafander drawn by some simple curves :)" itemprop="logo"/>
					</div>
					<div class="column is-2-mobile is-1-tablet flex-centered-content" id="languageSelectorContainer">
              <span v-if="getLanguage() == 'hu'">
                <span class="inactive"  v-lang.hungarian v-cloak>hu</span>/<a href="#" @click.prevent="setLanguage('en')" v-lang.english v-cloak>en</a>
              </span>
              <span v-else-if="getLanguage() == 'en'">
                <a href="#" @click.prevent="setLanguage('hu')" v-lang.hungarian v-cloak>hu</a>/<span class="inactive" v-lang.english v-cloak>en</span>
              </span>
					</div>
				</div>

        <!-- [MAIN_TITLE] -->
        <div id="mainTitleWrapper">
          <div>
            <h1 v-lang.mainTitle>&nbsp;</h1>
          </div>
        </div>
        <!-- [/MAIN_TITLE] -->

        <!-- [GAME] -->
				<div id="gameContainer"></div>
				<!-- [/GAME] -->

			</header>
		</div>

		<hr class="separator normal tertiary"/>
		<hr class="separator normal secondary"/>

		<div class="stripe neutralSecondary triple-bottom-and-top-padding">
			<section id="whoWeAre" class="default-box">

				<div class="sectionTitle secondary flex-centered-content">
					<div v-lang.crewTitle></div>
				</div>

				<div class="container is-fluid columns is-gapless reverse-column-order pull-up-normal double-bottom-padding">
					<div class="column is-12-mobile">
						<div class="columns is-gapless is-fluid is-mobile is-centered is-multiline">
							<div class="column columns is-gapless is-multiline is-10-mobile is-6-tablet member">
								<div class="column is-12 profilePhoto">
									<div>
										<div class="jobTitle" v-lang.rollingTheRocks>&nbsp;</div>
										<img src="../assets/lead-of-the-development-marti.jpg" alt="Marti's photo" />
									</div>
								</div>
								<div class="column is-12 primaryText has-text-centered" vocab=””http://schema.org” typeof=”Person”>Marti</div>
							</div>
							<div class="column columns is-gapless is-multiline is-10-mobile is-6-tablet member">
								<div class="column is-12 profilePhoto pull-down">
									<div>
										<div class="jobTitle" v-lang.visionAndCode>&nbsp;</div>
										<img src="../assets/swift-developer-entrepreneur-edi.jpg" alt="Edi's photo" />
									</div>
								</div>
								<div class="column is-12 primaryText has-text-centered" vocab=””http://schema.org” typeof=”Person”>Edi</div>
							</div>
							<div class="column columns is-gapless is-multiline is-10-mobile is-6-tablet member">
								<div class="column is-12 profilePhoto">
									<div>
										<div class="jobTitle" v-lang.webCoder>&nbsp;</div>
										<img src="../assets/php-developer-degyo.jpg" alt="Degyo's photo"/>
									</div>
								</div>
								<div class="column is-12 primaryText has-text-centered" vocab=””http://schema.org” typeof=”Person”>Degyo</div>
							</div>
							<div class="column columns is-gapless is-multiline is-10-mobile is-6-tablet member">
								<div class="column is-12 profilePhoto pull-down">
									<div>
										<div class="jobTitle" v-lang.coder>&nbsp;</div>
										<img src="../assets/nodejs-developer-devops-ati.jpg" alt="Ati's photo"/>
									</div>
								</div>
								<div class="column is-12 primaryText has-text-centered" vocab=””http://schema.org” typeof=”Person”>Ati</div>
							</div>
						</div>
					</div>
					<div class="column is-12-mobile flex-centered-content">
						<div class="offsetContainer">
							<div class="shadowContainer">
								<div id="outerOverhangedContainer">
									<div id="innerOverhangedContainer">
										<h2>iOS, Android, Web?</h2>
										<p v-lang.aboutUs>nbsp;</p>
										<p class="has-text-weight-bold" v-lang.slogen></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>

		<div class="stripe primary">
			<works></works>
		</div>

		<div class="stripe rotated neutralPrimary">
			<section id="tech" class="default-box">
				<div class="container is-fluid columns is-multiline is-mobile is-tablet is-desktop secondaryText">

					<div class="column is-10 is-offset-1 has-text-centered techHeader">
						<h4 v-lang.whatWeLove>&nbsp;</h4>
            <span v-lang.readyToLearn>&nbsp;</span>
					</div>

					<div class="column is-12-mobile is-2-tablet has-text-centered-mobile techLogo">
						<img src="../assets/swift-programming-language.png" alt="Logo of swift programming language" />
					</div>

					<div class="column is-12-mobile is-4-tablet has-text-centered-mobile techText" v-lang.swiftDesc></div>

					<div class="column is-12-mobile is-2-tablet has-text-centered-mobile techLogo">
						<img src="../assets/nodejs-javascript-enviropment.png" alt="Logo of Node.js javascript enviropment"/>
					</div>
					<div class="column is-12-mobile is-4-tablet has-text-centered-mobile techText" v-lang.nodeDesc></div>

					<div class="column is-12-mobile is-2-tablet has-text-centered-mobile techLogo">
						<img src="../assets/firebase-database-logo.png" alt="Logo of Firebase real-time database"/>
					</div>
					<div class="column is-12-mobile is-4-tablet has-text-centered-mobile techText" v-lang.firebaseDesc></div>

					<div class="column is-12-mobile is-2-tablet has-text-centered-mobile techLogo">
						<img src="../assets/kotlin-programming-language.png" alt="Logo of Kotlin programming language"/>
					</div>
					<div class="column is-12-mobile is-4-tablet has-text-centered-mobile techText" v-lang.kotlinDesc></div>

					<div class="column is-12-mobile is-2-tablet has-text-centered-mobile techLogo">
						<img src="../assets/vuejs-javascript-framework.png" alt="Logo of Vue.js client-side javascript framework"/>
					</div>
					<div class="column is-12-mobile is-4-tablet has-text-centered-mobile techText" v-lang.vueDesc></div>

					<div class="column is-12-mobile is-2-tablet has-text-centered-mobile techLogo">
						<img src="../assets/htmlcss-logo.png" alt="Logo of HTML5 & CSS"/>
					</div>

          <div class="column is-12-mobile is-4-tablet has-text-centered-mobile techText" v-lang.cssHtmlDesc></div>

				</div>
			</section>
		</div>

		<div class="stripe primary">
			<mission></mission>
		</div>

		<div class="stripe secondary">
			<contact></contact>
		</div>

	</div>
</template>

<script>

	require('bulma/css/bulma.css');

	window.Swipe = require('../game/Swipe.js');

	var BootState = require('../game/BootState.js');
	var PreloadState = require('../game/PreloadState.js');
	var HomeState = require('../game/HomeState.js');
	var GameState = require('../game/GameState.js');

	export default {
		created() {

		  document.title = this.translate('siteTitle');

      console.log("All components ready, booting the game...");

      window.game = new Phaser.Game(960, 540, Phaser.AUTO, 'gameContainer');
      game.state.add('BootState', BootState);
      game.state.add('PreloadState', PreloadState);
      game.state.add('HomeState', HomeState);
      game.state.add('GameState', GameState);
      game.state.start('BootState');
    },
    methods: {
		  setLanguage(lng) {
        this.language = lng;
      },
      getLanguage() {
		    return this.language
      }
    }
	}
</script>

<style>
	@import '../assets/animate.css';
	@import '../assets/default.css';
	@import '../assets/spacetext.css';
	@import '../assets/star.css';
</style>
