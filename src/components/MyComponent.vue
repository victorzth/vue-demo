<script setup lang="ts">
import { ref } from 'vue'
import { fetchGreeting } from '@/services/api'

const name = ref<string | null>(null)
const greeting = ref<string>()

const handleGetGreeting = async () => {
  const response = await fetchGreeting(name.value!)
  greeting.value = response.greeting
}
</script>

<template>
  <div>
    <input v-model="name" placeholder="Enter your name" />
    <button @click="handleGetGreeting">Get Greeting</button>
    <div v-if="greeting">{{ greeting }}</div>
  </div>
</template>
