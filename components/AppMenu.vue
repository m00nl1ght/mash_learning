<template>
 <!-- Sidenav -->
 <nav
 v-if="props.isOpen"
    id="sidenav-7"
    class="fixed top-12 mt-3 right-0 z-[1035] h-screen w-60 translate-x-full overflow-hidden bg-white dark:bg-zinc-800 translate-x-0" >
  </nav>
  <!-- Sidenav -->
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  isOpen: Boolean
})
const openMenu = ref(props.isOpen)
</script>