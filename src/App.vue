<script setup>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <main>
    <Header />
    <RouterView />
  </main>
</template>

<style>
@import '../node_modules/normalize.css/normalize.css';

.container {
  padding-inline: 3rem;
}

.container-width {
  max-width: 75vw;
}

@media (max-width: 630px) {
  .container-width {
    max-width: 90vw;
  }
}
</style>

