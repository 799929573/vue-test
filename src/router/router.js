import Vue from 'vue';

// 配置路由
import VueRouter from 'vue-router';

import Home from '../views/Home.vue'
import List from "../views/List.vue";
import Detail from "../views/Detail.vue";

Vue.use(VueRouter);

const routes = [
    // {
    //     path: '*',
    //     redirect: '/index'
    // },
    {
        path: '',
        component: Home,
        children: [
            {
                path: 'test/:type',
                component: List,
            },
            {
                path: 'test/:type/:name',
                component: Detail,
            }
        ]
    }
]

// 实例化
const router = new VueRouter({
    mode: 'history',
    routes  // 相当于routes:routes
})

export default router;