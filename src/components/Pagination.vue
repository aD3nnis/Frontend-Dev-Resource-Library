<template>

    <div v-if="searchResultsSites.length >= 10" class="pagination-width-container">
        <vue-awesome-paginate
            :total-items="searchResultsSites.length"
            :items-per-page="store.state.numItems"
            :max-pages-shown="3"
            v-model="currentPage"
            @click="onClickHandler"
        />
    </div>

</template>

<script setup lang="ts">

import { ref } from "vue";
import { store, searchResultsSites} from "../store/store.js"
const onClickHandler = (page: number) => {
    console.log("PAGE: ", page);
    store.state.endPage = page * store.state.numItems;
};

const currentPage = ref(1);

</script>

<style>

.pagination-width-container{
    width: 100%;
    height: auto;
    background-color: white;
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
}
.pagination-container {
    display: flex;

    column-gap: 8px;
}
.paginate-buttons {
    height: 37px;

    width: 37px;

    border-radius: 7px;

    cursor: pointer;

    background-color: rgb(242, 242, 242);

    border: 1px solid rgb(242, 242, 242);

    color: black;
}
.paginate-buttons:hover {
    background-color: #d8d8d8;
}
.active-page {
    background-color: #2EB3AE;

    border: 1px solid #2EB3AE;

    color: white;
}
.active-page:hover {
    background-color: #2ea6a1;
}
</style>
