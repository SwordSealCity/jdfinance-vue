import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/index'
import Money from './views/Money/index'
import Ious from './views/Ious/index'
import Raise from './views/Raise/index'
import MyInfo from './views/MyInfo/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/money',
      name: 'money',
      component: Money
    },
    {
      path: '/ious',
      name: 'ious',
      component: Ious
    },
    {
      path: '/raise',
      name: 'raise',
      component: Raise
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: MyInfo
    }
    // {
    //   path: '/money',
    //   name: 'money',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "Money" */ './views/Money.vue')
    // }
  ]
})
