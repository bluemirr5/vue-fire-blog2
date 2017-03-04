import Vue from 'vue'
import Router from 'vue-router'
//noinspection JSUnresolvedVariable,JSUnresolvedVariable
import Main from '../components/main/Main'
//noinspection JSUnresolvedVariable,JSUnresolvedVariable
import List from '../components/list/List'
import vuescroll from 'vue-scroll'

Vue.use(Router);
Vue.use(vuescroll);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/houseList',
      name: 'List',
      component: List
    },

  ]
})
