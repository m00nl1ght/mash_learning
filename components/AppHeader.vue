<template>
  <header>
    <nav
      class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
    >
      <div class="flex w-full flex-wrap items-center justify-between px-6">
        <div class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContentX" data-te-collapse-item>
          <ul class="mr-auto flex flex-col lg:flex-row" data-te-navbar-nav-ref>
            <li data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="/"
                >Home</a
              >
            </li>
            <li data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="/about"
                >About</a
              >
            </li>
          </ul>
        </div>

        <div class="flex flex-row">
          <UiIconXbox class="h-6 w-6 mr-2" />
          <UiIconXbox class="h-6 w-6 mr-2" />
          <UiIconXbox class="h-6 w-6 mr-2" />
          
          <button type="button" @click="openMenu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6">
              <title>menu</title>
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits(['openMenu'])
function openMenu() {
  emit('openMenu')
}
</script>
