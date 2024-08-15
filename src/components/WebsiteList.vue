<template>
    <div class="container">
        <div class="website-list-container">
            <ul class="filtered-site-unordered">
                <li class="filtered-site-list" v-for="item in finalResultsForCurrentPage">
                    <span >{{ item.url }}</span>
                    <span>{{ item.difficulty_level }}</span>

                </li>
            </ul>
        </div>
    </div>

</template>
<script setup>
import {finalResultsForCurrentPage} from '@/store/store.js'

</script>
<style scoped>
.website-list-container{
    position: relative;
    z-index: 0;
}
.filtered-site-list{
    color: black;
    list-style: none;
    background-color: white;
    padding-block: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 11px;
    padding-left: 20px;
    padding-right: 20px;
    width: 70vw;
}
.filtered-site-unordered{
    padding: 0;
}
li:nth-child(even) { background: #F8F8F8; }

</style>