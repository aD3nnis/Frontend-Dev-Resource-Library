
<template>

    <div class="bullet-menu-icon">
        <span class="line"><span class="dot"></span></span>
        <span class="line"><span class="dot"></span></span>
        <span class="line"><span class="dot"></span></span>
    </div>

</template>

<style>

.bullet-menu-icon {
    width: 15px;
    height: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.dropdown-container.open .bullet-menu-icon span {
    background-color: #fff;
}
.dropdown-container.open .bullet-menu-icon .line::after{
    background-color: #fff;
}
.dropdown-container.open .bullet-menu-icon .line{
    background-color: #2EB3AE;
}
.line {
    display: flex;
    align-items: center;
    width: 12px;
}
.dot {
    height: 2px;
    width: 2px;
    border-radius: 50%;
    background-color: #2EB3AE;
    margin-right: 2px;
}
.line::after {
    content: "";
    flex-grow: 1;
    height: 2px;
    background-color: #2EB3AE;
}

</style>
