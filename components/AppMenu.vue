<template>
  <nav
    v-if="props.isOpen"
    id="sidenav-7"
    class="fixed right-0 z-[1035] h-screen w-60 translate-x-full overflow-hidden bg-white dark:bg-zinc-800 translate-x-0"
  >
    <button type="button" @click="emit('closeMenu')">
      <UiIconClose class="h-6 w-6" />
    </button>
  </nav>
</template>

<script setup lang="ts">
const emit = defineEmits(['closeMenu'])
const props = defineProps({
  isOpen: Boolean
})
</script>
