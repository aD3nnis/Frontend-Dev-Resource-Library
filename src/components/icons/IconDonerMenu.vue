<template>

    <div class="doner-menu-icon">
        <span class="line1"></span>
        <span class="line2"></span>
        <span class="line3"></span>
    </div>

</template>
<style>

.doner-menu-icon span{
    height: 2px;
    background-color: #2EB3AE;
}
.dropdown-container.open .doner-menu-icon span {
    background-color: #fff;
}
.doner-menu-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 10px;
    width: 10px;
}
.line1 {
    width: 12px;
}
.line2 {
    width: 9px;
}
.line3 {
    width: 6px;
}

</style>
<script setup>


</script>