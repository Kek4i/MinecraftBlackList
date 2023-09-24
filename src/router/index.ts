import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/mainPage.vue')
    },
    {
      path: '/cheats',
      name: 'cheats',
      component: () => import('../components/cheats/tableCheats.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('../components/reports/newReport.vue')
    }
  ]
})

export default router