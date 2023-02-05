import {createRouter, createWebHistory} from "vue-router";
import TableRow from "@/components/TableRow.vue";

const routes = [
    {
        path: '/',
        component: TableRow
    },
    {
        path: '/settings',
        component: () => import('@/components/TableSettings.vue')
    }
]


export default createRouter({
    history: createWebHistory(),
    routes
})