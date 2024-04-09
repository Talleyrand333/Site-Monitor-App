import { createRouter, createWebHistory } from '@ionic/vue-router';

import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import Register from '../views/Register.vue'
import UserPage from '../views/UserPage.vue'
import SingleSideBar from '../views/SingleSideBar.vue'
import SideBar from '../views/SideBar.vue'
import BottomBar from '../views/BottomBar.vue'

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
  },
  {
    path: '/user',
    name: 'UserPage',
    component: UserPage
  },
  {
    path: '/sidebar',
    name: 'SingleSidebar',
    component: SingleSideBar
  },
  {
    path: '/sidebars',
    name: 'Sidebar',
    component: SideBar
  },
   {
    path: '/page',
    name: 'BottomBar',
    component: BottomBar
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
