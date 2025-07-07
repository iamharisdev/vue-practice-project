import ChangePassword from '@/screens/auth/ChangePassword.vue'
import ForgotPassword from '@/screens/auth/ForgotPassword.vue'
import Login from '@/screens/auth/Login.vue'
import Otp from '@/screens/auth/Otp.vue'
import Signup from '@/screens/auth/Signup.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/forgot-password', component: ForgotPassword },
  { path: '/otp', component: Otp },
  { path: '/change-password', component: ChangePassword },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
