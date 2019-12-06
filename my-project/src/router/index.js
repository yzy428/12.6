import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import My  from '../views/My.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect:'/home'
},
{
    path:'/home',
    component:Home,
    redirect:'/home/index',
    children:[
        {
            path:'/home/index',
            component:Index
        },
        {
            path:'/home/my',
            component:My
        }
    ]
}



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router