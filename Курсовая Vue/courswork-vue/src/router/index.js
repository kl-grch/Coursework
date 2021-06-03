import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/catalog',
    component: () => import ('../views/Catalog.vue'),
    children: [
      {
        path: 'phone',
        component: () => import ('../views/catalog/Phone.vue'),
      },
      {
        path: 'mac',
        component: () => import ('../views/catalog/Mac.vue')
      },
      {
        path: 'pad',
        component: () => import ('../views/catalog/Pad.vue')
      },
      {
        path: 'accses',
        component: () => import ('../views/catalog/Accses.vue')
      },
    ]
  },
  {
    path: '/autorization',
    component: () => import ('../views/Autorization.vue')
  },
  {
    path: '/order',
    component: () => import ('../views/Order.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path: '/404',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
