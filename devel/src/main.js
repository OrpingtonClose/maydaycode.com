import Vue from 'vue'
import App from './components/App.vue'
import Contact from './components/Contact.vue'
import Mission from './components/Mission.vue'
import Works from './components/Works.vue'

//multi-language support
import MultiLanguage from 'vue-multilanguage'
import Strings from './strings.js';
Vue.use(MultiLanguage, Strings);

//Adding components
Vue.component('works', Works)
Vue.component('mission', Mission)
Vue.component('contact', Contact)

//Phaser & game
window.PIXI = require('pixi.js')
window.p2 = require('p2')
window.Phaser = require('phaser')

new Vue({
  el: '#app',
  render: h => h(App)
})

