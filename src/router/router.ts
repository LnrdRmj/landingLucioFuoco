import { firebaseAuth } from '@/services/firebase/firebase'
import Admin from '@/views/admin/Admin.vue'
import Landing from '@/views/Landing.vue'
import Login from '@/views/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Landing,
        },
        {
            path: '/cuisine',
            name: 'login',
            component: Login,
        },
        {
            path: '/adcuisine',
            name: 'admin',
            component: Admin,
            beforeEnter: async (to, from) => {
                await firebaseAuth.authStateReady()
                if (firebaseAuth.currentUser == null) {
                    return {
                        name: 'home',
                    }
                }
            },
        },
    ],
})

export default router
