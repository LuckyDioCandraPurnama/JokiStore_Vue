import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return {
          el: to.hash
        }
      } else {
        return { top: 0 }
      }
    }
  },
  history: createWebHistory(),
  routes: [
    // landing page
    {
      path: '/',
      name: 'Landing Page',
      component: () => import('../components/landingPage/LandingPage.vue')
    },
  ],
  base: '/'
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