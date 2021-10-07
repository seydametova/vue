import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../views/Dashboard'
import AddPaymentView from '../views/AddPaymentView'
import About from '../views/About'
import NotFound from '../views/NotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/:page',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/add/payment',
      name: 'AddPayment',
      component: AddPaymentView
    },
    {
      path: '/add/payment/:category',
      name: 'AddPayment',
      component: AddPaymentView
    }
  ]
})

// const user = false

// router.beforeEach((to, from, next) => {
//   if (!user && to.name !== 'NotFound') {
//     next({ name: 'NotFound' })
//   } else {
//     next()
//   }
// })

const titles = {
  dashboard: 'dashboard',
  About: 'About',
  NotFound: 'NotFound',
  AddPayment: 'Add Payment'
}

router.afterEach((to) => {
  document.title = titles[to.name]
})

export default router
