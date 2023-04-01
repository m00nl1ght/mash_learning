<template>
  <QPage class="page-container">
    <div class="column items-center">
      <h1 class="q-mb-none">Levity blog</h1>
      <p>Automation, artificial intelligence, and no-code</p>
    </div>

    <div class="blog-list">
      <BlogPostCard v-for="item in 9" />
    </div>
  </QPage>
</template>

<script setup lang="ts"></script>

<style scoped>
h2 {
  font-family: 'Sofia Sans Condensed';
}

.blog-list {
  display: grid;
  grid-auto-flow: row;
  grid-auto-columns: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}
</style>
