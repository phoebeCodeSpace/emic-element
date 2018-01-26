import Vue from 'vue'
import Router from 'vue-router'
import pageButton from '@/pages/pageButton'
import pageAlert from '@/pages/pageAlert'
import pageSwitch from '@/pages/pageSwitch'

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
