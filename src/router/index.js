import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Privacy from '../views/Privacy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/alcoToDo-dev/',
    name: 'Home',
    component: Home
  },
  {
    path: '/alcoToDo-dev/privacy',
    name: 'Privacy',
    component: Privacy
  }
]

const router = new VueRouter({
  routes
})

export default router
