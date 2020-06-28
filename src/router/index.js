import Vue from 'vue'
import VueRouter from 'vue-router'
import Step_Start from '../views/Step_Start.vue'
import store from '@/store/storex.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Step_Start,
    // beforeEnter: (to, from, next) => {
    //   console.log(this, to, from, next)
    //   next()
    // }
  },
  {
    path: '/time',
    name: 'Time',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "TimeSlot" */ '@/views/Step_TimeSlot.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // this pushes to the top of the next page when changing routes.
  // Using async as it gives the page time to draw itself (header, etc)
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 0)
    })
  }
})

router.afterEach((to) => {
  console.log('Global -> afterEach() in router', to.name)
  store.dispatch('setCurrentStep', to.name)
})


export default router
