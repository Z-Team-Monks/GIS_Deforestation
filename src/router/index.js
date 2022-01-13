import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../components/Landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/detail',
    name: 'Detail',
    
    component: () => import(/* webpackChunkName: "detail" */ '../components/Detail.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    
    component: () => import(/* webpackChunkName: "profile" */ '../components/Profile.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
