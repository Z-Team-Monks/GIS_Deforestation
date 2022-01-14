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
  },
  {
    path: '/addpost',
    name: 'Add Post',
    
    component: () => import(/* webpackChunkName: "addpost" */ '../components/AddPost.vue')
  },
  {
    path: '/register',
    name: 'Register',
    
    component: () => import(/* webpackChunkName: "addpost" */ '../components/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    
    component: () => import(/* webpackChunkName: "login" */ '../components/Login.vue')
  },
  {
    path: "/donate",
    name: "Donate",

    component: () => import("../components/Donate.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
