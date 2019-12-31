import Vue from 'vue'
import Router from 'vue-router'
// @ 指src目录
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
