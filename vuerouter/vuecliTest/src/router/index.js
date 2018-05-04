import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'
import params from '@/components/params'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            components: {
                default: HelloWorld,
                left: hi1,
                right: hi2
            }
        },
        {
            path: '/hi',
            components: {
                default: HelloWorld,
                left: hi2,
                right: hi1
            }
        },
        {
            path: '/params/:id(\\d+)/:title',
            component: params
        },
        {
            path: '/goHome',
            redirect: '/'
        },
        {
            path: '/goParams/:id(\\d+)/:title',
            redirect: '/params/:id(\\d+)/:title'
        },
        {
            path: '/hi1',
            component: hi1,
            alias: '/yuning'
        }
    ]
})