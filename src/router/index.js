import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import bedRooms from '../views/bedRooms.vue'
import shavGeneral from '../views/shavGeneral.vue'
import shaniDalal from '../views/shaniDalal.vue'
import binyatsTable from '../views/binyatsTable.vue'
import migurimTable from '../views/migurimTable.vue'
import marganiTable from '../views/marganiTable.vue'


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
  {
    path: '/binyatstable',
    name: 'binyatsTable',
    component: binyatsTable
  },
  {
    path: '/migurimtable',
    name: 'migurimTable',
    component: migurimTable
  },
  {
    path: '/marganitable',
    name: 'marganiTable',
    component: marganiTable
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
