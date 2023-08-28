import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const carRoutes: RouteRecordRaw[] = [
  {
    path: '/g6',
    component: () => import('@/views/G6/G6.vue'),
    meta: {
      title: '小鹏G6 超智驾轿跑SUV'
    }
  },
  {
    path: '/p7i',
    component: () => import('@/views/P7i/P7i.vue'),
    meta: {
      title: '小鹏全新P7i售价、价格、续航、参数配置'
    }
  },
  {
    path: '/g9',
    component: () => import('@/views/G9/G9.vue'),
    meta: {
      title: '小鹏G9售价、价格、续航、参数配置'
    }
  },
  {
    path: '/p7',
    component: () => import('@/views/P7/P7.vue'),
    meta: {
      title: '小鹏G9售价、价格、续航、参数配置'
    }
  },
  {
    path: '/p5',
    component: () => import('@/views/P5/P5.vue'),
    meta: {
      title: '小鹏G9售价、价格、续航、参数配置'
    }
  },
  {
    path: '/g3i',
    component: () => import('@/views/G3i/G3i.vue'),
    meta: {
      title: '小鹏G9售价、价格、续航、参数配置'
    }
  }
]

const router = createRouter({
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
        ...carRoutes,
        {
          path: '/configurations/:id',
          component: () => import('@/views/Configurations/Configurations.vue')
        },
        {
          path: '/stores',
          component: () => import('@/views/Stores/Stores.vue')
        }
      ]
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to) => {
  if (to.meta?.title) {
    document.title = [to.meta.title, '小鹏汽车官网'].join(' | ')
  } else {
    document.title = '小鹏汽车丨未来出行探索者'
  }
})

export default router
