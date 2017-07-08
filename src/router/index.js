import Vue from 'vue'
import Router from 'vue-router'


const Home = resolve => require(['@/views/home.vue'], resolve)
const Index = resolve => require(['@/views/home/index.vue'], resolve)
const Case = resolve => require(['@/views/case/case.vue'], resolve)
const About = resolve => require(['@/views/about/about.vue'], resolve)
const News = resolve => require(['@/views/news/news.vue'], resolve)
const CompanyIntro = resolve => require(['@/views/about/company.vue'], resolve)
const Points = resolve => require(['@/views/about/points.vue'], resolve)
const JoinUs = resolve => require(['@/views/about/join-us.vue'], resolve)
const Coorper = resolve => require(['@/views/about/coorper.vue'], resolve)
const Contact = resolve => require(['@/views/about/contact.vue'], resolve)

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
          name: '',
          children:[            
            {
              path:'/company',
              name:'公司介绍',
              component:CompanyIntro
            },
            {
              path:'/points',
              name:'丁子观点',
              component:Points
            },
            {
              path:'/join-us',
              name:'加入我们',
              component:JoinUs
            },
            {
              path:'/coorper',
              name:'合作伙伴',
              component:Coorper
            },
            {
              path:'/contact',
              name:'联系我们',
              component:Contact
            }  
          ]
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
