<template>
    <div class="menu-item" :class="{active}">
        <router-link :to="path">
            <component :is="icon"/>
            <span>{{ name }}</span>
        </router-link>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
    icon: Function,
    name: String,
    path: String
})

const route = useRoute()
const active = computed(() => route.path.startsWith(props.path))

</script>

<style scoped lang="less">
.menu-item {
    padding: 0 16px 0 0;
    position: relative;

    a {
        color: rgba(0, 0, 0, 0.6);
        text-decoration: none;
        display: flex;
        padding: 9px 16px 9px 32px;
        align-items: center;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        transition-property: all;
        transition-duration: 0.1s;
        transition-timing-function: linear;

        &:hover {
            color: rgba(0, 0, 0, 0.87);
            background-color: #e5e5e5;
        }

        & > :first-child {
            margin-right: 16px;
            font-size: 20px;
        }
    }

    &.active {
        a {
            color: #42b983;
            background-color: rgba(66, 185, 131, 0.1);
        }
    }
}
</style>
