<template>
    <div class="container">
        <div class="sort-title-container" >
            <div @click="setSorter('url')" class="sort-each-title">
                <IconUpDownSortArrow/>
                <p class="site-sort-title">
                    Website Name
                </p>
            </div>
            <div @click="setSorter('difficulty_level')" class="sort-each-title">
                <IconUpDownSortArrow/>
                <p class="site-sort-title">
                    Difficulty Level
                </p>
            </div>
        </div>
    </div>


</template>
<script setup>
import {store} from '@/store/store.js'
import IconUpDownSortArrow from '@/components/icons/IconUpDownSortArrow.vue'

const setSorter = (type) => {
    store.state.activeSorter = type;
    store.state.sorters[type] = !store.state.sorters[type];
}

</script>
<style>
.sort-each-title{
    display: flex;
    cursor: pointer;
}
.site-sort-title{
    color: #181818;
    font-weight: bold;
    font-size: 12px;
}
.sort-title-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 3px;
    border-bottom: 2px solid #F8F8F8;
}

</style>