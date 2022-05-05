<template>
    <a-drawer
        placement="left"
        :header-style="{display:'none'}"
        :body-style="{padding: 0, display: 'flex', flexDirection: 'row'}"
        :closable="false"
        :visible="visible"
        @close="backHome"
    >
        <div id="drawer-header" class="side header">
            <div>
                <router-link :to="{name:'首页'}">
                    <close-outlined/>
                </router-link>
            </div>
            <header-menu/>
        </div>
        <router-view/>
    </a-drawer>
</template>

<script setup>
import { CloseOutlined } from "@ant-design/icons-vue";
import HeaderMenu from './HeaderMenu.vue'
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

const route = useRoute()
const router = useRouter()
const visible = computed(() => !route.meta.hidden)
const backHome = () => router.push({ name: '首页' })
</script>

<style scoped>

</style>
