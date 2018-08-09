import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import AppLayout from '@/modules/core/pages/AppLayout'
import Home from '@/modules/core/pages/Home'
import PageNotFound from '@/modules/core/pages/PageNotFound'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      component: AppLayout,
      meta: {
        title: 'project.name'
      },
      children: [{
          path: '',
          component: Home,
          name: 'Home',
          meta: {
            title: 'home.title',
            noCache: true
          }
        }
      ]
    },
    {
      path: '*',
      component: PageNotFound
    } //TODO: 404 PAGE
  ]
})