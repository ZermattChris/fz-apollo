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
    meta: { title: 'Book your Flight! Get Started' },
  },
  {
    path: '/time',
    name: 'Time',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "TimeSlot" */ '@/views/Step_TimeSlot.vue'),
    meta: { title: 'Choose the Time to fly' },
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import(/* webpackChunkName: "Info" */ '@/views/Step_Info.vue'),
    meta: { title: 'Contact Details & Passenger infos' },
  },
  {
    path: '/pay',
    name: 'Pay',
    component: () => import(/* webpackChunkName: "Pay" */ '@/views/Step_Pay.vue'),
    meta: { title: 'Payment' },
  },
  {
    path: '/canceled',
    name: 'Canceled',
    component: () => import(/* webpackChunkName: "Pay" */ '@/views/Step_Cancelled.vue'),
    meta: { title: 'Payment Cancelled' },
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: () => import(/* webpackChunkName: "Thanks" */ '@/views/Step_Thanks.vue'),
    meta: { title: 'Thanks for booking with FlyZermatt!' },
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

// Global Navigation Guards.
router.afterEach((to) => {
  //console.log('Global -> afterEach() in router', to.name)
  store.dispatch('setCurrentStep', to.name)
})


export default router
