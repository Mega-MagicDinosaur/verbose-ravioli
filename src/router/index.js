import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/RoundMenuView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/round-menu'
  },
  {
    path: '/round-menu',
    name: 'round-menu',
    component: () => import('../views/RoundMenuView.vue')
  },
  {
    path: '/company-list',
    name: 'company-list',
    component: () => import('../views/CompanyListView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
