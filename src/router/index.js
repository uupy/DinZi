import Vue from 'vue'
import Router from 'vue-router'


const Home = resolve => require(['@/views/home.vue'], resolve)
const Index = resolve => require(['@/views/home/index.vue'], resolve)
const Case = resolve => require(['@/views/case/case.vue'], resolve)
const About = resolve => require(['@/views/about/about.vue'], resolve)
const News = resolve => require(['@/views/news/news.vue'], resolve)

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
        	name: ''
    	}]
    },
    {
        path: '/case',
        name:'案例',
        component:Home,
        children: [{
          path: '/case/',
          component: Case,
          name: ''
      }]
    },
    {
        path: '/about',
        name:'关于',
        component:Home,
        children: [{
          path: '/about/',
          component: About,
          name: ''
      }]
    },
    {
        path: '/news',
        name:'动态',
        component:Home,
        children: [{
          path: '/news/',
          component: News,
          name: ''
      }]
    }
  ]
})
