
<template>
    <div class="site-container">
        <div class="site-lock-width-container">
            <h1 class="container"> Website Directory</h1>
            <div class="grid-parent-container">
                <SearchBar class="search-bar"/>
                <div class="display-container-buttons">
                    <DropDownButton title="Filter" class="drop-down-button">
                        <template #icon>
                            <IconDonerMenu/>
                        </template>
                        <template #drop-down-items>
                            <DropDownFilter/>
                        </template>
                    </DropDownButton>
                    <DropDownButton title="View" class="drop-down-button">
                        <template #icon>
                            <IconBulletMenu/>

                        </template>
                        <template #drop-down-items>
                            <DropDownView/>
                        </template>

                    </DropDownButton>
                </div>

            </div>
            <WebsiteSortTitle/>
            <WebsiteList v-if="store.state.viewMode === 'List View'"/>
            <WebsiteCardList v-else/>
            <div v-if="searchResultsSites.length === 0" class="zero-sites">
                <div>No websites found. Please modify your filters.</div>
            </div>
            <div v-else >
                <WebsiteEntryCount/>
                <Pagination/>
            </div>

        </div>


    </div>


</template>

<script setup>
import DropDownButton from '@/components/DropDownButton.vue'
import IconBulletMenu from '@/components/icons/IconBulletMenu.vue'
import IconDonerMenu from '@/components/icons/IconDonerMenu.vue'
import SearchBar from '@/components/SearchBar.vue'
import WebsiteList from '@/components/WebsiteList.vue'
import Pagination from '@/components/Pagination.vue'
import WebsiteSortTitle from '@/components/WebsiteSortTitle.vue'
import WebsiteEntryCount from '@/components/WebsiteEntryCount.vue'
import DropDownFilter from '@/components/DropDownFilter.vue'
import DropDownView from '@/components/DropDownView.vue'
import WebsiteCardList from '@/components/WebsiteCardList.vue'
import {store, getSitesFromJson, searchResultsSites} from '@/store/store.js'
import {onMounted} from 'vue'

onMounted(() => {
    getSitesFromJson();
});
</script>

<style>
.site-container {
    background-color: white;
    display: grid;
    position: relative;
    justify-content: center;
    z-index: 0;
    min-height: 100vh;

}
.zero-sites{
    color: #ddd;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 30px;
    height: 50%;
    align-items: center;
    text-align: center;
}
.zero-sites div{
    max-width: 80%;
}
.site-lock-width-container{
    min-width: 75vw;
}
.site-container h1 {
    color: #222222;
    font-size: 20px;
}
.grid-parent-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    padding-inline: 3rem;
    margin-bottom: 30px;
    @media (max-width: 470px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        justify-content: center;
    }
}
.search-bar{
    @media (max-width: 470px){
        display: flex;
        justify-content: center;
    }
}
.display-container-buttons{
    display: flex;
    justify-content: end;
    @media (max-width: 470px){
        margin-top: 10px;
        display: flex;
        justify-content: center;
    }
}
.search-bar-container{
    @media (max-width: 470px) {
        width: 100%;
    }
}
.paginate-buttons{
    @media (max-width: 470px) {
        height: 25px;
        width: 25px;
    }
}
</style>
