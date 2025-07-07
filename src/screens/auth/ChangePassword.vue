<template>
  <AuthLayout>
    <h2 class="text-xl font-semibold mb-4 text-center">Change Password</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="password" type="password" placeholder="Password" class="input" />
      <input v-model="password" type="password" placeholder="Password" class="input" />
      <button type="submit" class="btn">Save</button>
    </form>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'

const password = ref('')
const pass = ref('')

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
