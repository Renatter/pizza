import {
    createRouter,
    createWebHistory
} from 'vue-router';
import Order from "./views/Order.vue"
import Admin from "./views/Admin.vue"
import Basket from "./views/Basket.vue"
import Snacks from "./views/Snacks.vue"
import PizzaView from "./views/PizzaView.vue"
import ProductView from "./views/ProductView.vue"

import ICoffe from "./views/ICoffe.vue"
import IJuices from "./views/IJuices.vue"
import ICocktails from "./views/ICocktails.vue"
import ISous from "./views/ISous.vue"
import IDeset from "./views/IDeset.vue"
import SnacksView from "./views/SnacksView.vue"
import AddItem from "./components/AddItem.vue"
import AddSnake from "./components/AddSnake.vue"
import AdminOrder from "./components/AdminOrder.vue"
import Promo from "./components/Promo.vue"
const router = createRouter({

    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'PizzaView',
            component: PizzaView,
        },
        {
            path: '/prdocut/:id',
            name: 'ProductView',
            component: ProductView,
            props: true
        },
        {
            path: '/SnacksView/:id/:id2',
            name: 'SnacksView',
            component: SnacksView,
            props: true
        },
        {
            path: '/Basket',
            name: 'Basket',
            component: Basket,
        },
        {
            path: '/Snacks',
            name: 'Snacks',
            component: Snacks,
        },
        {
            path: '/Order',
            name: 'Order',
            component: Order,
        }, {
            path: '/Admin',
            name: 'Admin',
            component: Admin,
        },

        {
            path: '/ICocktails',
            name: 'ICocktails',
            component: ICocktails,
        },
        {
            path: '/ICoffe',
            name: 'ICoffe',
            component: ICoffe,
        }, {
            path: '/IDeset',
            name: 'IDeset',
            component: IDeset,
        },
        {
            path: '/ISous',
            name: 'ISous',
            component: ISous,
        },
        {
            path: '/IJuices',
            name: 'IJuices',
            component: IJuices,
        },
        {
            path: '/AddItem/:id/:id2',
            name: 'AddItem',
            component: AddItem,
            props: true
        },
        {
            path: '/AddSnake/:id/:id2',
            name: 'AddSnake',
            component: AddSnake,
            props: true
        },
        {
            path: '/AdminOrder',
            name: 'AdminOrder',
            component: AdminOrder,
        },
        {
            path: '/Promo',
            name: 'Promo',
            component: Promo,
        },

    ]
})
export default router;