import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MainLayout/MainLayout.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/views/Home/Home.vue')
        },
        {
          path: '/g6',
          component: () => import('@/views/G6/G6.vue')
        },
        {
          path: '/p7i',
          component: () => import('@/views/P7i/P7i.vue')
        },
        {
          path: '/g9',
          component: () => import('@/views/G9/G9.vue')
        },
        {
          path: '/p7',
          component: () => import('@/views/P7/P7.vue')
        },
        {
          path: '/p5',
          component: () => import('@/views/P5/P5.vue')
        },
        {
          path: '/g3i',
          component: () => import('@/views/G3i/G3i.vue')
        }
      ]
    }
  ]
})
