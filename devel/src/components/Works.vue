<template>
	<section id="works" class="default-box">

		<div class="sectionTitle secondary flex-centered-content">
			<div v-lang.worksTitle></div>
		</div>

    <div class="container is-fluid columns is-gapless is-multiline pull-up-normal" id="worksContainer">

      <div id="worksDevice" class="column is-12-mobile is-12-tablet is-4-desktop flex-centered-content">
        <!-- [TEAMMELO_ICON&IMAGE] -->
        <div v-if="contentId == 0">
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in">
            <img :src="images.teammeloSS" key="teamMeloImage" class="projectImage" alt="TeamMelo iOS application screen shot" />
          </transition>
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in">

            <img src="../assets/teammelo-ios-application-logo.png" key="teamMeloLogo" class="projectLogo" alt="Logo of TeamMelo iOS application" />
          </transition>
        </div>
        <!-- [/TEAMMELO_ICON&IMAGE] -->

        <!-- [CRAYHU_ICON&IMAGE] -->
        <div v-else-if="contentId == 1">
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in">

            <img :src="images.crayhuSS" key="crayhuImage" class="projectImage" alt="cray.hu website screen shot" />
          </transition>
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in">

            <img src="../assets/dummyIcon.png" key="crayhuLogo" class="projectLogo" alt="cray.hu website logo" />
          </transition>
        </div>
        <!-- [/CRAYHU_ICON&IMAGE] -->

        <!-- [CUBICCALC_ICON&IMAGE] -->
        <div v-else-if="contentId == 2">
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in">

            <img :src="images.cubiccalcSS" key="cubicCalcImage" class="projectImage" alt="CubicCalc iOS application screen shot" />
          </transition>
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in">

            <img src="../assets/cubiccalc-ios-application-logo.png" key="cubicCalcLogo" class="projectLogo" alt="CubicCalc iOS & Kotlin application logo" />
          </transition>
        </div>
        <!-- [/CUBICCALC_ICON&IMAGE] -->

        <!-- [EARTHQUAKES_ICON&IMAGE] -->
        <div v-else-if="contentId == 3">
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in">

            <img :src="images.earthquakeSS" key="earthquakeImage" class="projectImage" alt="Earthquakes iOS application screen shot" />
          </transition>
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in">

            <img src="../assets/earthquakes-ios-application-logo.png" key="earthquakeLogo" class="projectLogo" alt="Earthquakes iOS application logo" />
          </transition>
        </div>
        <!-- [/EARTHQUAKES_ICON&IMAGE] -->
      </div>

      <div id="worksContentWrapper" class="column is-12-mobile is-12-tablet is-7-desktop flex-centered-content">
        <div id="worksContent">

          <!-- [TEAMMELO_DESC] -->
          <div v-if="contentId == 0">
            <transition
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
              mode="out-in">

              <div key="teamMeloDescription">
                <h2 v-lang.teammeloName>&nbsp;</h2>
                <h4 v-lang.teammeloTags>&nbsp;</h4>
                <p v-lang.teammeloDesc>&nbsp;</p>
                <div class="linkContainer">
                  <a href="https://itunes.apple.com/hu/app/teammelo/id1294116292">
                    <img src="../assets/app-store-badge.svg" class="storeLogo" alt="Apple App Store logo"/>
                  </a>
                </div>
              </div>
            </transition>
          </div>
          <!-- [/TEAMMELO_DESC] -->

          <!-- [CRAYHU_DESC] -->
          <div v-else-if="contentId == 1">
            <transition
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
              mode="out-in">

              <div key="crayhuDescription">
                <h2 v-lang.crayhuName>&nbsp;</h2>
                <h4 v-lang.crayhuTags>&nbsp;</h4>
                <p v-lang.crayhuDesc>&nbsp;</p>
                <div class="linkContainer">
                  <a href="http://cray.hu" class="button secondary">Let's see!</a>
                </div>
              </div>

            </transition>
          </div>
          <!-- [CRAYHU_DESC] -->

          <!-- [CUBICCALC_DESC] -->
          <div v-else-if="contentId == 2">
            <transition
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
              mode="out-in">

              <div key="cubicCalcDescription">
                <h2 v-lang.cubiccalcName>&nbsp;</h2>
                <h4 v-lang.cubiccalcTags>&nbsp;</h4>
                <p v-lang.cubiccalcDesc>&nbsp;</p>
                <div class="columns is-gapless is-multiline linkContainer">
                  <div class="column is-12-mobile is-3-tablet is-4-desktop has-text-centered-mobile">
                    <a href="https://play.google.com/store/apps/details?id=hu.cray.cubiccalc">
                      <img src="../assets/google-play-badge.svg" class="storeLogo" alt="Google Play Logo">
                    </a>
                  </div>
                  <div class="column is-12-mobile is-3-tablet is-4-desktop has-text-centered-mobile">
                    <a href="https://itunes.apple.com/hu/app/cubiccalc/id1252698172">
                      <img src="../assets/app-store-badge.svg" class="storeLogo" alt="AppStore logo">
                    </a>
                  </div>
                </div>
              </div>

            </transition>
          </div>
          <!-- [/CUBICCALC_DESC] -->

          <!-- [EARTHQUAKES_DESC] -->
          <div v-else-if="contentId == 3">
            <transition
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
              mode="out-in">

              <div key="earthquakeDescription">
                <h2><span v-lang.earthquakesName>&nbsp;</span></h2>
                <h4 v-lang.earthquakesTags>&nbsp;</h4>
                <p v-lang.earthquakesDesc>&nbsp;</p>
                <div class="linkContainer">
                  <a href="https://itunes.apple.com/hu/app/earthquakes-f%C3%B6ldreng%C3%A9sek/id1230531278">
                    <img src="../assets/app-store-badge.svg" class="storeLogo" alt="AppStore logo">
                  </a>
                </div>
              </div>

            </transition>
          </div>
          <!-- [/EARTHQUAKES_DESC] -->

        </div>
      </div>

      <div id="worksDots" class="column is-12-mobile is-12-tablet is-1-desktop flex-centered-content">
        <div id="dotContainer">
          <div v-for="i in 4" :class="{secondary: (i - 1) == contentId}" @click="contentId = (i - 1)" class="dot"></div>
        </div>
      </div>

    </div>

	</section>
</template>
<script>
	export default {
		data() {
			return {
				contentId: 0,
        images: {
          teammeloSS: require('../assets/teammelo-ios-application-screen-shot.png'),
          crayhuSS: require('../assets/crayhu-website-screen-shot.jpg'),
          cubiccalcSS: require('../assets/cubiccalc-ios-application-screen-shot.jpg'),
          earthquakeSS: require('../assets/earthquakes-ios-application-screen-shot.png')
        }
			}
		}
	}
</script>
