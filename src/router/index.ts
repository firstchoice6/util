import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue'),
    children: [
      {
        path: 'about1',
        name: 'About1',
        component: () => import('../views/About/About1.vue')
      },
      {
        path: 'about2',
        name: 'About2',
        component: () => import('../views/About/About2.vue')
      },
      {
        path: 'about3',
        name: 'About3',
        component: () => import('../views/About/About3.vue')
      },
    ]
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('../views/Demo.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
