import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior() {
        return { top: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/Pages/Home')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('@/Pages/Cart')
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: () => import('@/Pages/CheckoutComponent')
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: () => import('@/Pages/CatalogComponent'),

        },
        {
            path: '/catalog/:id',
            name: 'productName',
            component: () => import('@/Pages/SinglePage')
        },
        {
            path: '/account',
            name: 'account',
            component: () => import('@/Pages/MyAccount')
        }
    ]
})

export default router;
