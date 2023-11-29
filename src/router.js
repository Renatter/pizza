import {
    createRouter,
    createWebHistory
} from 'vue-router';
import Login from "./components/Login.vue"
import Home from "./components/Home.vue"
const router = createRouter({

    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,

        },

    ]
})
export default router;