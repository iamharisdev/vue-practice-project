import ChangePassword from '@/screens/auth/changePassword.vue'
import ForgotPassword from '@/screens/auth/forgotPassword.vue'
import Login from '@/screens/auth/login.vue'
import Otp from '@/screens/auth/otp.vue'
import Signup from '@/screens/auth/signup.vue'
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
