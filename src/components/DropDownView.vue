<template>

    <div class="dropdown-filters">
        <div class="filter-box">
            <RadioList v-model="selected" :items="store.radioItems" />
        </div>
    </div>

</template>

<script setup>
import RadioList from '@/components/RadioList.vue'
import { ref } from 'vue'
import {store} from '@/store/store.js'
let selected = ref('');

</script>

<style scoped>

.dropdown-filters{
    margin-top: 40px;
    background-color: white;
    width: 78px;
    height: auto;
    border: 1px solid #2EB3AE;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    padding: 0;

}

</style>