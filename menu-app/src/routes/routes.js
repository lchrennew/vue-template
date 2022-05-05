import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
    {
        name: '首页',
        path: '/:path(.*)?',
        component: Home
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
