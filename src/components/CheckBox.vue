<template>

    <div class="input-container">
        <input
            type="checkbox"
            :id="elID"
            :checked="props.modelValue"
            @change="emit('update:modelValue', $event.target.checked)"
            class="visually-hidden"
        >
        <div class="fixing-alignment my-checkbox"></div>
        <label
            class="dropdown-text "
            :for="elID">
            {{ label }}
        </label>
    </div>

</template>

<script setup>

import { defineProps } from 'vue';
import { computed } from 'vue';

const props = defineProps({
    label: String,
    name: String,
    modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue']);

const elID = computed(() => {
    return `checkbox-${props.name}`;
});

</script>

<style scoped>

.fixing-alignment{
    display: flex;
}
.dropdown-text{
    color: black;
    font-size: 9px;
    display: flex;
    padding: 0.3rem 0;
}

</style>
