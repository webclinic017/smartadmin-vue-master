import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homepage/index'
import NewPage from '@/components/homepage/NewPage'
import Login from '@/components/homepage/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/NewPage',
      name: 'NewPage',
      component: NewPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
