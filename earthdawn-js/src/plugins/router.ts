import { createRouter, createWebHistory } from 'vue-router'
import DetailWindow from '../components/DetailWindow.vue'

const routes = [
  {
    path: '/',
    name: 'DetailWindow',
    component: DetailWindow
  }
]


export default createRouter({
    history: createWebHistory(import.meta.env['BASE_URL']),
    routes
  })