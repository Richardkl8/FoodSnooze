import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Recipe from '../views/Recipe.vue';
import Search from '../views/Search.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/recipe/:id',
        name: 'Recipe',
        component: Recipe,
    },
    {
        path: '/search/:query',
        name: 'Search',
        component: Search,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes,
});

export default router;
