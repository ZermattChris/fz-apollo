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
    path: '/TimeSlot',
    name: 'TimeSlot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "TimeSlot" */ '@/views/TimeSlot.vue'),
    // beforeRouteLeave: (to, from, next) => {
    //   console.log(this, to, from, next)
    // }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router
