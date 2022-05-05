import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/Home.vue'
import Notifications from "../pages/Notifications.vue";
import Settings from "../pages/Settings.vue";

const routes = [
    {
        name: '首页',
        component: Home,
        path: '/',
        meta: { hidden: true }
    },
    {
        name: '通知',
        component: Notifications,
        path: '/notifications',
    },
    {
        name: '设置',
        component: Settings,
        path: '/settings',
    }
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
