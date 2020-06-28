import Vue from 'vue'
import VueRouter from 'vue-router'
import Step_Start from '../views/Step_Start.vue'

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
    // beforeRouteUpdate(to, from, next) {
    //   // called when the route that renders this component has changed,
    //   // but this component is reused in the new route.
    //   // For example, for a route with dynamic params `/foo/:id`, when we
    //   // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
    //   // will be reused, and this hook will be called when that happens.
    //   // has access to `this` component instance.
    //   this.$refs.ContinueBtn.click()
    //   next()
    // },
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




export default router
