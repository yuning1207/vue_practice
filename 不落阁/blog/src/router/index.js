import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home'
import articles from '@/components/page/articles'
import life from '@/components/page/life'
import about from '@/components/page/about'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/articles',
      name: 'articles',
      component: articles
    },
    {
      path: '/life',
      name: 'life',
      component: life
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
