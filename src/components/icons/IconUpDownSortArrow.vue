<template>

   <div  class="up-down-sort-container">
       <div class="arrow-sort arrow-up-sort"></div>
       <div class="arrow-sort arrow-down-sort"></div>
   </div>

</template>
<style>

.up-down-sort-container{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 5px;
}
.arrow-sort {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    display: flex;
}

.arrow-up-sort {
    border-bottom: 4px solid black;
}

.arrow-down-sort {
    margin-top: 2px;
    border-top: 4px solid black;
}
</style>
<script setup>
</script>