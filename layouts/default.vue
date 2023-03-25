<template>
  <section class="relativ h-screen w-screen bg-gray-200 flex flex-col overflow-hidden">
    <AppHeader @open-menu="isOpen = !isOpen" />

    <main class="sm:h-full flex-1 flex flex-col">
      <slot />
    </main>

    <AppFooter />
    <AppMenu :is-open="isOpen" @closeMenu="isOpen = !isOpen" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>
