<template>
    <div>
        <router-link :to="{name: '通知'}">
            <bell-filled/>
            <a-badge count="4"/>
        </router-link>
    </div>
    <div>
        <router-link :to="{name: '设置'}">
            <setting-filled/>
        </router-link>
        <a-avatar shape="circle" size="large" v-if="avatar">S</a-avatar>
    </div>
</template>

<script setup>
import { BellFilled, SettingFilled } from "@ant-design/icons-vue";

defineProps({
    avatar: { type: Boolean, default: false }
})
</script>

<style scoped lang="less">

</style>
