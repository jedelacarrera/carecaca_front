import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Table from '../views/Table.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/table',
    name: 'Table',
    component: Table,
  },
  {
    path: '/instructions',
    name: 'Instructions',
    // route level code-splitting
    // this generates a separate chunk (instructions.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "instructions" */ '../views/Instructions.vue'
      ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
