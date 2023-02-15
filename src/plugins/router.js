import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const routes = [
    {
        path: '/',
        component: HomePage,

    },
    {
        path: '/settings',
        component: () => import('@/pages/UserSetPage.vue')
    },
    {
        path: '/companies',
        component: () => import('@/pages/ComPage.vue')
    },
    {
        path: '/companies/settings',
        component: () => import('@/pages/ComSetPage.vue')
    },
    {
        path: '/clients',
        component: () => import('@/pages/ClientPage.vue')
    },
    {
        path: '/clients/settings',
        component: () => import('@/pages/ClientSetPage.vue')
    }
]


export default createRouter({
    history: createWebHistory(),
    routes
})