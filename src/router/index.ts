import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const carRoutes: RouteRecordRaw[] = [
  {
    path: '/g92024',
    component: () => import('@/views/G92024/G92024.vue'),
    meta: {
      title: '2024款小鹏G9 超智驾豪华纯电SUV'
    }
  },
  {
    path: '/p52024',
    component: () => import('@/views/P52024/P52024.vue'),
    meta: {
      title: '2024款小鹏P5 「真智享」越级轿车'
    }
  },
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
      title: '小鹏P7售价、价格、续航、参数配置'
    }
  },
  {
    path: '/p5',
    component: () => import('@/views/P5/P5.vue'),
    meta: {
      title: '小鹏P5售价、价格、续航、参数配置'
    }
  },
  {
    path: '/g3i',
    component: () => import('@/views/G3i/G3i.vue'),
    meta: {
      title: '小鹏G3i售价、价格、续航、参数配置'
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
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
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
