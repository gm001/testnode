import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'

import '../node_modules/element-ui/lib/theme-default/index.css'

import Home from './components/Home.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)

let router = new VueRouter({
	routes: [
		{path: '', redirect: '/home'},
		{path: '/home', component: Home}
	]
})

new Vue({
  el: '#app',
  router
})
