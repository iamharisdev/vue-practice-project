<template>
  <AuthLayout>
    <h2 class="text-xl font-semibold mb-4 text-center">Forgot Password</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" class="input" />

      <button type="submit" class="btn">Next</button>
    </form>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'

const email = ref('')

function handleLogin() {
  // Fake token for example
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
