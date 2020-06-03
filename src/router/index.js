import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start,
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
    component: () => import(/* webpackChunkName: "TimeSlot" */ '@/views/TimeSlot.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router
