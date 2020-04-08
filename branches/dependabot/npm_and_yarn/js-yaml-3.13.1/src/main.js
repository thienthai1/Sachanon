import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import Home from './components/Home'
import Contact from './components/Contact'
import Aboutus from './components/Aboutus'
import Towel from './components/Towel'
import Lingallery from 'lingallery';
import Bathmat from './components/Bathmat'
import Bathrobe from './components/Bathrobe'
import Bedsheet from './components/Bedsheet'
import Pillow from './components/Pillow'
import Lightbox from 'vue-easy-lightbox'
import testpic from './components/testpic'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.component('lingallery', Lingallery);

Vue.use(Lightbox)

const routes = [
	{ path: '/', component: Home},
	{ path: '/contact', component: Contact},
	{ path: '/aboutus', component: Aboutus},
	{ path: '/towel', component: Towel},
	{ path: '/bathmat', component: Bathmat},
	{ path: '/bathrobe', component: Bathrobe},
	{ path: '/bedsheet', component: Bedsheet},
	{ path: '/pillow', component: Pillow},
	{ path: '/testpic', component: testpic}
];

const router = new VueRouter({
	routes,
	mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
