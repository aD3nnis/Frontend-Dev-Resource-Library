<template>

    <div>
        <div class="input-container" v-for="(item, index) in items" :key="index">
            <div class="radio-button-container">
                <input
                class="visually-hidden"
                type="radio"
                :value="item.value"
                v-model="selected"
                :id="item.value" />
                <div class=" fixing-alignment my-checkbox radio-radius"></div>
                <label class="dropdown-text"
                       :for="item.value">
                    {{ item.label }}
                </label>
            </div>

        </div>
    </div>

</template>

<script setup>

import {computed} from 'vue';
import {store} from '@/store/store.js'

const props = defineProps({
    items: {
        type: Array,
        required: true
    },
    });

    const selected = computed({
        get: () => store.state.viewMode,
        set: (value) => { store.state.viewMode = value;}
    });

</script>

<style >

.radio-button-container{
    display: flex;
    align-items: center;
}
.radio-radius::after{
    border-radius: 10px;
}


</style>