<template>
    <router-link to="/">
        <div id="logo">LOGO</div>
    </router-link>
</template>

<script>
export default {
    name: "Logo"
}
</script>

<style scoped lang="less">
#logo {
    height: 72px;
    display: flex;
    padding: 10px 20px;
    align-items: center;
    background-color: #fff;
    font-size: 2em;
}
</style>
