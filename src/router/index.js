import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  history: createWebHistory(),
  routes: [
    // authorization
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Login.vue')
    },
    // landing page
    {
      path: '/',
      name: 'Landing Page',
      component: () => import('../components/Dashboard.vue')
    },
    // serviecs
    {
      path: '/rank-pack',
      name: 'ML Pack',
      component: () => import('../components/ml/rank-pack.vue')
    },
    {
      path: '/rank-star',
      name: 'ML Star',
      component: () => import('../components/ml/rank-pack.vue')
    },
    {
      path: '/classic',
      name: 'ML Classic',
      component: () => import('../components/ml/clas.vue')
    }
  ]
})

router.beforeEach(async(to, from, next) => {
  let title = "UrLuck | "
  if (to.name !== 'Landing Page') {
    title += to.name
  } else {
    title = "UrLuck Store"
  }
  document.title = title
  next()
})

export default router