import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import bedRooms from '../views/bedRooms.vue'
import shavGeneral from '../views/shavGeneral.vue'
import shaniDalal from '../views/shaniDalal.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/general',
    name: 'general',
    component: shavGeneral
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: bedRooms
  },
  {
    path: '/שלוםהמפקדת',
    name: 'shaniDalal',
    component: shaniDalal
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
