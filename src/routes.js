import VueRouter from 'vue-router'
import CubePage from './components/CubePage.vue'
import ErrorPage from './components/ErrorPage.vue'


export default new VueRouter ({
	mode: 'history',
	routes: [
		{path: '/', component: CubePage},
		{path: '*', component: ErrorPage}
	]
})
