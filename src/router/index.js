import Vue from 'vue'
import VueRouter from 'vue-router'
import Step_Start from '../views/Step_Start.vue'
import store from '@/store/storex.js'
import { add, parseISO, isAfter } from 'date-fns'

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
router.beforeEach((to, from, next) => {
  //console.log(to, from, next)
  // Check for Stale data on Nav. If stale, return to Start
  if (staleFlightDate()) {
    if (from.name !== 'Start') {
      next({ name: 'Start' })
    } else {
      next()
    }
  } else {
    next()
  }
})


router.afterEach((to) => {
  //console.log('Global -> afterEach() in router', to.name)
  store.dispatch('setCurrentStep', to.name)
})


/*****************************************************
// Check for Stale data on Nav.
 *****************************************************/
function staleFlightDate () {
  // if (store.state.flightDate !== '') {
    const earliestPossFlightDateISO = add(Date.now(), {days: store.state._bookDaysOffset})
    const flightDateISO = parseISO(store.state.flightDate)
    if (  isAfter(earliestPossFlightDateISO, flightDateISO) ) {
      console.log('flightDate is before allowed date.')
      store.dispatch('setFlightDate', '')
      store.dispatch('setArriveDate', '')
      store.dispatch('setDepartDate', '')
      store.dispatch('setFlight', '')
      store.dispatch('setWantsPhotos', false)
      store.dispatch('clearSlotsPassengers')
      return true
    }
  // }
  return false
}


export default router
