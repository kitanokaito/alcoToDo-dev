import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Privacy from '../views/Privacy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  }
]

const router = new VueRouter({
  base: 'https://kitanokaito.github.io/alcoToDo-dev',
  routes
})

export default router
