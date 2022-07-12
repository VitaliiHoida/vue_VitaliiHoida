import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import CartPage from "@/views/CartPage.vue";

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomePage
    },
    {
        name: 'cart',
        path: '/cart',
        component: CartPage
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});