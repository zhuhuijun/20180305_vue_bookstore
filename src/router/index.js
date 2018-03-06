import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Detail from '@/components/Detail'
import Add from '@/components/Add'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {path:'*',component:List}
  ]
})
