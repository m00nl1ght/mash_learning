<template>
  <q-card class="cursor-pointer">
    <q-img :src="url" />
    <q-card-section>
      <q-chip icon="event" class="q-ma-none" color="positive" text-color="white">Add to calendar</q-chip>

      <div class="text-h6">Data Types and Applications: Structured vs Unstructured Data</div>
      <div class="text-subtitle2">
        Let's get clarity on the differences between structured, unstructured, and semi-structured data - and what you can actually do with these!
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section class="row">
      <div class="col">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <span class="q-ml-sm">Hanna Kleinings</span>
      </div>

      <div class="row items-center justify-end w-100">
        <div>8 min read</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
const url =
  'https://assets-global.website-files.com/5fb24a974499e90dae242d98/6349363935d9db12cc69ed32_Data%20Types%20and%20Applications_%20Structured%20vs%20Unstructured%20Data.png'
</script>

<style scoped></style>
