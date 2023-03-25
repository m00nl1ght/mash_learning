<template>
<section class="relativ h-screen w-screen bg-gray-200 flex flex-col min-h-0 min-w-0 overflow-hidden">
  <AppHeader @open-menu="isOpen = !isOpen" />

  <main class="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
    <slot />
  </main>

  <AppFooter />
  <AppMenu :is-open="isOpen" />
</section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(true)
</script>