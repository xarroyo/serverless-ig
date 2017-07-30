import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MyMovies from '@/components/MyMovies'
import Iphone from '@/components/Iphone'
import Items from '@/components/Items'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/my-movies',
      name: 'myMovies',
      component: MyMovies
    },
    {
      path: '/items',
      name: 'items',
      component: Items
    },
    {
      path: '/iphone',
      name: 'iphone',
      component: Iphone
    }
  ]
})
