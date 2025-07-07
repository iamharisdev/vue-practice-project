<template>
  <AuthLayout>
    <h2 class="text-xl font-semibold mb-4 text-center">Sign Up</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" class="input" />
      <input v-model="password" type="password" placeholder="Password" class="input" />
      <button type="submit" class="btn">Sign up</button>
    </form>
    <p class="text-sm text-center mt-4">
      Login Screen? <router-link to="/login">Click here</router-link>
    </p>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const authStore = useAuthStore()

function handleLogin() {
  // Fake token for example
  authStore.login('demo_token', { email: email.value })
}
</script>

<style scoped>
.input {
  @apply w-full mb-4 px-3 py-2 border rounded;
}
.btn {
  @apply w-full bg-blue-500 text-white py-2 rounded;
}
</style>
