import {
    createRouter,
    createWebHistory
} from 'vue-router';
import Order from "./views/Order.vue"
import Basket from "./views/Basket.vue"
import Home from "./components/Home.vue"
import ProductView from "./views/ProductView.vue"
const router = createRouter({

    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/prdocut/:id',
            name: 'ProductView',
            component: ProductView,
            props: true
        },
        {
            path: '/Basket',
            name: 'Basket',
            component: Basket,
        },
        {
            path: '/Order',
            name: 'Order',
            component: Order,
        },

    ]
})
export default router;