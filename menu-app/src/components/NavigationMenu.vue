<template>
    <div class="menu">
        <menu-group name="我的工具">
            <menu-item :icon="CodeOutlined" name="GIT仓库" path="/coddy/"/>
            <sub-menu :icon="DeploymentUnitOutlined" name="CI/CD流水线"
                      :open="defaultOpenSubMenu('/pippy/', '/pippy-ops/')">
                <sub-menu-item name="我的流水线" path="/pippy/"/>
                <sub-menu-item name="流水线Ops" path="/pippy-ops/"/>
            </sub-menu>
            <menu-item :icon="GiftOutlined" name="制品仓库" path="/artty/"/>
            <menu-item :icon="ApartmentOutlined" name="组织结构" path="/orggy/"/>
        </menu-group>
    </div>
</template>

<script setup>
import { DeploymentUnitOutlined, CodeOutlined, ApartmentOutlined, GiftOutlined } from "@ant-design/icons-vue";
import MenuGroup from './menu/MenuGroup.vue'
import MenuItem from "./menu/MenuItem.vue";
import SubMenu from "./menu/SubMenu.vue";
import SubMenuItem from "./menu/SubMenuItem.vue";
import { useRoute } from "vue-router";

const route = useRoute()
const defaultOpenSubMenu = (...prefixes) => prefixes.some(prefix => route.path.startsWith(prefix))

</script>

<style scoped lang="less">
.menu {
    display: flex;
    flex-direction: column;

}
</style>
