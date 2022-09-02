import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../components/Test.vue'
const routes = [{
  path: '/',
  name: 'test',
  component: Test,
}]

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
export default router
