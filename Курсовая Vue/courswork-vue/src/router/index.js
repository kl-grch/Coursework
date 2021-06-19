import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/catalog',
    component: () => import ('../views/Catalog.vue'),
    children: [
      {
        path: 'phone',
        component: () => import ('../views/catalog/Phone.vue'),
        children: [
          {
            name: 'Phone',
            path: 'phone/:id',
            component: () => import ('../views/catalog/phone/AllPhone.vue')
          }
        ]
      },
      {
        path: 'mac',
        component: () => import ('../views/catalog/Mac.vue'),
        children: [
          {
            name: 'Mac',
            path: 'mac/:id',
          }
        ]
      },
      {
        path: 'pad',
        component: () => import ('../views/catalog/Pad.vue'),
        children: [
          {
            name: 'Pad',
            path: 'pad/:id',
        }
        ]
      },
      {
        path: 'accses',
        component: () => import ('../views/catalog/Accses.vue'),
        children: [
          {
            name: 'Accses',
            path: 'accses/:id',
          }
        ]
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
  },
  {
    path: '/',
    component: () => import('../views/Main.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
