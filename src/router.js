import Vue from 'vue'
import VueRouter from 'vue-router'

import AddResource from './pages/add-resource.vue'
import Dashboard from './pages/dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/add-resource',
    component: AddResource
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  { path: '*', redirect: '/dashboard' }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
