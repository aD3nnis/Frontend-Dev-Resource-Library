<template>

    <div class="container">
        <div class="margin-count-tab">
            <div  class="select-tab-container">
                <select v-if="searchResultsSites.length >= 10" v-model="numOption" class="clicked-tab-container">
                    <option v-if="searchResultsSites.length >= 30"  value="10" class="count-text">
                        10
                    </option>

                    <option v-if="searchResultsSites.length >= 70" class="count-text">
                        30
                    </option>
                    <option
                        :value="Math.floor((searchResultsSites.length/2)/ 5) * 5" class="count-text">
                        {{Math.floor((searchResultsSites.length / 2) / 5) * 5}}
                    </option>
                    <option
                        :value="searchResultsSites.length" class="count-text">
                        All
                    </option>
                </select>
                <div v-if="store.state.endPage - store.state.numItems < 0" class="count-text count-other-text">
                    <div v-if="searchResultsSites.length >= 10">
                        Showing {{store.state.endPage + 1}} - {{numOption}} of {{searchResultsSites.length}}
                    </div>
                    <div v-else>
                        Showing {{store.state.endPage + 1}} - {{searchResultsSites.length}} of {{searchResultsSites.length}}
                    </div>
                </div>
                <div v-else class="count-text count-other-text">
                    Showing {{store.state.endPage - store.state.numItems + 1}} - {{store.state.endPage}} of {{searchResultsSites.length}}
                </div>
            </div>

        </div>
    </div>

</template>

<script setup>

import {ref} from 'vue';
import {store, searchResultsSites} from "../store/store.js"
import {watch} from 'vue'
const numOption = ref(10);

function changeNumValue(){
    numOption.value = Number(numOption.value)
    store.mutations.setNumItems(numOption.value)
}
function changeEntryView(){
    if(searchResultsSites.value.length){
    console.log(searchResultsSites.value.length)
    }
}

watch(() => numOption.value, changeNumValue);
watch(()=> searchResultsSites, changeEntryView );

</script>

<style scoped>

.count-text{
    color: #999999;
    font-size: 12px;
    align-items: center;
    display: flex;
    justify-content: center;
}
.count-other-text{
    align-items: center;
    display: flex;
    margin-left: 10px;
}
.select-tab-container{
    display: flex;
}
.margin-count-tab{
    margin-top: 20px;
    margin-bottom: 20px;
}
.clicked-tab-container{
    width: 40px;
    height: 20px;
    border: 1px solid #999999;
    border-radius: 5px;
    color: #999999;
    font-size: 12px;
    cursor: pointer;
}
.clicked-tab-container:focus-visible{
    border: 1px solid #2EB3AE;
    outline: 0;
}
.clicked-tab-container:hover{
    border: 1px solid #2EB3AE;
}

.count-text option:hover{
    display: none;
}


</style>
