/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import TutorialsView from '../views/TutorialsView.vue'

const routes = [
  {
    path: '/',
    name: 'tutorials',
    component: TutorialsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 