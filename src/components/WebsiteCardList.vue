<template>

    <div class="container container-width">
        <div class="website-list-container">
            <ul class="card-item-grid">
                <li class="card-item" v-for="(site, index) in finalResultsForCurrentPage">
                    <div class="card-top">
                        <img v-if="site.faviconSrc" :src="site.faviconSrc" class="card-favicon" alt="favicons hero page"/>
                        <div v-else class="card-favicon" >X</div>
                        <a class="site-link-text" :href="site.fullSiteUrl" target="_blank">{{ site.url }}</a>
                    </div>
                    <div class="site-img-div">
                        <img
                            class="site-img"
                            v-if="site.imageSrc"
                            :src="site.imageSrc"
                            alt="website hero page"
                        />
                        <div
                            v-else
                            class="site-img-placeholder"
                            >
                            <div class="site-img-placeholder-text">
                                Site image missing
                            </div>

                        </div>
                    </div>
                    <div class="card-version-num">
                        <span>Difficulty Level: {{ site.difficulty_level }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script setup>

import {finalResultsForCurrentPage} from '@/store/store.js';

</script>

<style scoped>

.website-list-container{
    position: relative;
    z-index: 0;
    margin-top: 10px;
}
.card-item{
    color: black;
    list-style: none;
    border: 1px solid #ddd;
    padding-block: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    font-size: 11px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
}
.card-item-grid{
    @media (max-width: 925px){
        display: grid;
        grid-template-columns: 50% 50%;
    }
    @media (max-width: 630px){
        display: flex;
        flex-direction: column;
    }
    display: grid;
    grid-template-columns: 33% 33% 33%;
    gap: 10px;
    padding: 0;
}
.card-top{
    display: flex;
    width: 100%;
    justify-content: left;
    margin-bottom: 10px;
}
.card-favicon{
    margin-right: 10px;
    max-width: 6%;
    height: auto;
}
.card-version-num{
    margin-top: 10px;
    display: flex;
    justify-content: end;
    width: 90%;
}
.site-img-placeholder{
    @media (max-width: 925px){
        aspect-ratio: 70/39;
    }
    @media (max-width: 630px){
        aspect-ratio: 70/39;
    }
    width: 100%;
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    aspect-ratio: 70 / 39;

}
.site-img-placeholder-text{
    display: flex;
    align-items: center;
    text-align: center;
}

</style>