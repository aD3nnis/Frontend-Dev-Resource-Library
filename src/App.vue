<script setup>
import Header from './components/Header.vue'
import SiteContainer from '@/SiteContainer.vue'

</script>

<template>


  <main>

      <Header />
      <SiteContainer/>

  </main>
</template>
<style>

@import "../node_modules/normalize.css/normalize.css";

.container {
    padding-inline: 3rem;

}
.container-width{
    max-width: 75vw;
@media (max-width: 630px){
    max-width: 90vw;
    }
}
</style>

