<template>

    <CheckBox
        :modelValue="model"
        @update:modelValue="updateHandler"
        :name="filterValue"
        :label="label"
    />

</template>

<script setup>

import { defineProps } from 'vue';
import { store } from '@/store/store.js'
import { computed } from 'vue';
import CheckBox from '@/components/CheckBox.vue'

const props = defineProps({
    filterType: String,
    filterValue: String,
    label: String
})

const updateHandler = (event) => {
    model.value = event;
}

const model = computed({
    get: () => {
        return store.state.filters[props.filterType][props.filterValue]
    },
    set: (value) => {
        store.state.filters[props.filterType][props.filterValue] = value;
    }
});

</script>