import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'
import params from '@/components/params'
import error from '@/components/Error'

Vue.use(Router)

export default new Router({
    mode: 'history',
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
            component: params,
            // beforeEnter: (to, from, next) => {
            //     console.log(to);
            //     console.log(from);
            //     next({ path: '/' });
            // }
        },
        {
            path: '/goHome',
            redirect: '/'
        },
        {
            path: '/goParams/:id(\\d+)/:title',
            redirect: '/params/:id(\\d+)/:title',
        },
        {
            path: '/hi1',
            component: hi1,
            alias: '/yuning'
        },
        {
            path: '*',
            component: error
        }
    ]
})