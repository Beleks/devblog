import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Update',
    component: () => import('../views/Update.vue')
  },
  {
    path: '/indev',
    name: 'inDev',
    component: () => import('../views/inDeveloping.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
