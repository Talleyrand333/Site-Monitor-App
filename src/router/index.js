import { createRouter, createWebHistory } from '@ionic/vue-router';

import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path:'/login',
    name:"Login",
    component:LoginPage
  },
  {
    path:'/register',
    name:"Register",
    component:Register
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
