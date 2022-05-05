<script setup>
import HeaderMenu from "./components/HeaderMenu.vue";
import HeaderDrawer from "./components/HeaderDrawer.vue";
</script>

<template>
    <header-menu avatar/>
    <header-drawer/>
</template>

<style lang="less">
#header > div > a, #drawer-header > div > a {
    border: none;
    background-color: transparent;
    margin: 0;
    display: block;
    padding: 0.5em;
    border-radius: 1.5em;
    font-size: 1.5em;
    line-height: 1em;
    transition-property: background-color;
    transition-duration: 0.15s;
    transition-timing-function: ease;
    position: relative;
    cursor: pointer;
}

#header > div > a {
    color: #fff;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
}

#drawer-header {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0.5em;
    border-right: 1px #ddd solid;

    & > div > a {
        color: #ccc;

        &.router-link-active, &:hover {
            color: #42b983;
            background-color: rgba(66, 185, 131, 0.1);
        }
    }
}
</style>
