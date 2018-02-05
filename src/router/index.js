import Vue from 'vue'
import Router from 'vue-router'
import pageButton from '@/pages/pageButton'
import pageAlert from '@/pages/pageAlert'
import pageSwitch from '@/pages/pageSwitch'
import pagePagination from '@/pages/pagePagination'
import pageInput from '@/pages/pageInput'
import pageRadio from '@/pages/pageRadio'
import pageCheckbox from '@/pages/pageCheckbox'

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
    },{
      path: '/radio',
      name: 'pageRadio',
      component: pageRadio
    },{
      path: '/checkbox',
      name: 'pageCheckbox',
      component: pageCheckbox
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