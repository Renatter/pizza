import {
    createRouter,
    createWebHistory
} from 'vue-router';
import Profile from "./views/Profile.vue"
import Basket from "./views/Basket.vue"
import Home from "./components/Home.vue"
import  ProductView from "./views/ProductView.vue"
const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/prdocut/:id',
            name: 'ProductView',
            component: ProductView,
            props:true
        },
        {
            path: '/Profile',
            name: 'Profile',
            component: Profile,
        },
        {
            path: '/Basket',
            name: 'Basket',
            component: Basket,
        },

    ]
})
export default router;