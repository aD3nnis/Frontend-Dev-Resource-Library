<template>
    <div>
        <div class=" search-bar-container ">
            <div class="search-icon">
            </div>
            <input
                class="search-filler-text"
                placeholder="Search"
                v-model="searchBar"
            >
        </div>
    </div>

</template>

<script setup>

import {computed} from 'vue';
import {store} from '@/store/store.js'

const searchBar = computed( {
    get: () => {
        return store.state.searchBar
    },
    set: (value) => {
        store.state.searchBar = value;
        console.log(store.state.searchBar)
    }
});

</script>

<style>
    .search-filler-text:focus-visible{
        outline: 0;
        border-radius: 5px;
        background-color: white;
        border: 0;
    }
    .search-bar-container{
        max-width: 435px;
        height: 35px;
        background-color: white;
        border-radius: 5px;
        border: 2px solid #F8F8F8;
        display: flex;
        align-items: center;
    }
    .search-bar-container:focus-within{
        border: 2px solid #2EB3AE;
    }
    .search-icon {
        position: absolute;
        height: 10px;
        width: 10px;
        border: 2px solid #333333;
        border-radius: 10px;
        margin-left: 15px;
        margin-bottom: 3px;
    }
    .search-icon::before {
        content: "";
        position: absolute;
        right: -2px;
        bottom: -5px;
        height: 6px;
        width: 2px;
        background-color: #333333;
        transform: rotateZ(-40deg);
    }
    .search-filler-text{
        color: #333333;
        margin-left: 35px;
        font-size: 11px;
        border: 0;
        width: 100%;
        height: 100%;
        align-self: center;
        border-radius: 5px;
    }

</style>
