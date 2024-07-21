// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import History from '../views/History.vue'
// import Statistics from '../views/Statistics.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/history', component: History },
  { path: '/statistics', component: Statistics },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
