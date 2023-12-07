import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/mainPage.vue')
    },
    {
      path: '/cheats',
      name: 'cheats',
      component: () => import('../components/cheats/mainTable.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('../components/reports/newReport.vue')
    }
  ]
})

export default router