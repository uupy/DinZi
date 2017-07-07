import Vue from 'vue'
import Router from 'vue-router'


const Home = resolve => require(['@/views/home.vue'], resolve)
const Index = resolve => require(['@/views/home/index.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	name:'首页',
      	component:Home,
      	children: [{
        	path: '/index',
        	component: Index,
        	name: '首页'
    	}]
    }
  ]
})
