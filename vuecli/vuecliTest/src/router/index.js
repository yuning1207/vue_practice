import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi from '@/components/hi'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'

Vue.use(Router) //vue全局使用router

export default new Router({
    routes: [ //数组
        { //对象
            path: '/', //浏览器中显示访问的路由地址
            name: 'HelloWorld', //路由名称
            component: HelloWorld
        },
        {
            path: '/hi',
            component: hi,
            children: [{
                    path: '/',
                    component: hi,
                    name: 'hi'
                },
                {
                    path: 'hi1',
                    component: hi1,
                    name: 'hi1'
                },
                {
                    path: 'hi2',
                    component: hi2,
                    name: 'hi2'
                }
            ]
        }
    ]
})