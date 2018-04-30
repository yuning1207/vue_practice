import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi from '@/components/hi'

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
            name: 'hi',
            component: hi
        }
    ]
})