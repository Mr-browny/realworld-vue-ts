import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  }, 
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  }, 
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  }, 
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue')
  }, 
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue')
  }, 
  {
    path: '/edit-article',
    name: 'Editor',
    component: () => import('@/views/Editor.vue')
  }, 
  {
    path: '/article',
    name: 'Article',
    component: () => import('@/views/Article.vue')
  }, 
]

const router = new VueRouter({
  routes
})

export default router
