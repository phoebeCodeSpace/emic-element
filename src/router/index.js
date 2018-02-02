import Vue from 'vue'
import Router from 'vue-router'
import pageButton from '@/pages/pageButton'
import pageAlert from '@/pages/pageAlert'
import pageSwitch from '@/pages/pageSwitch'
import pagePagination from '@/pages/pagePagination'
import pageInput from '@/pages/pageInput'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/button'
    },
    {
      path: '/button',
      name: 'pageButton',
      component: pageButton
    }, {
      path: '/alert',
      name: 'pageAlert',
      component: pageAlert
    }, {
      path: '/switch',
      name: 'pageSwitch',
      component: pageSwitch
    }, {
      path: '/pagination',
      name: 'pagePagination',
      component: pagePagination
    }, {
      path: '/input',
      name: 'pageInput',
      component: pageInput
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (window.location.pathname){
    window.location.pathname = ""
  }
  next()
})

export default router;