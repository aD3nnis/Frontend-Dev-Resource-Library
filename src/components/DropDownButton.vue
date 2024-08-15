<template>

    <div class="overtop-container">
        <div
            class="dropdown-container"
            :class="{open: show}"
        >
            <button
                @click="toggle"
                v-bind:class="{ clickedDropButton: show }"
                class="drop-button"
            >
                <slot name="icon"></slot>
                <span
                    v-bind:class="{ clickedButtonText: show }"
                    class="button-text"
                >
                    {{ title }}
                </span>
                <span
                    v-bind:class="{ clickedArrowDown: show }"
                    class="arrow-down"
                >
                </span>
            </button>
                <slot name="drop-down-items" v-if="show"/>
        </div>
    </div>

</template>
<script setup>

import { ref } from 'vue'
const show = ref(false)

function toggle() {
    show.value = !show.value
}

const props = defineProps({
    title: {
        type: String,
        default:''
    },
})

</script>

<style>

.dropdown-container{
    position: relative;
    z-index: 1;
    min-width: 73px;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: end;
}
.drop-button{
    background-color: white;
    width: 78px;
    height: 33px;
    border: 1px solid #2EB3AE;
    border-radius: 6px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
}
.drop-button:hover{
    width: 80px;
    height: 35px;
}
.clickedDropButton {
    background-color: #2EB3AE;
    border: 1px solid white;
}
.arrow-down {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #2EB3AE;
}
.clickedArrowDown{
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid white;
    margin-bottom: 5px;
 }
.button-text{
    color: #2EB3AE;
    font-size: 10px;
}
.clickedButtonText{
    color: white;
}

</style>
