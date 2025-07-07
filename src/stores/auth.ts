import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: null,
  }),
  actions: {
    login(token: string, user: any) {
      this.token = token
      this.user = user
      localStorage.setItem('token', token)
    },
    logout() {
      this.token = ''
      this.user = null
      localStorage.removeItem('token')
    },
  },
  //   persist: true,
  persist: {
    key: 'auth-storage', // localStorage key name
    storage: localStorage, // or sessionStorage
    paths: ['token', 'email'], // only persist these fields
  },
})
