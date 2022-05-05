<template>
    <div class="menu-item" :class="{active}">
        <router-link :to="path">
            <arrow-right-outlined/>
            <span>{{ name }}</span>
        </router-link>
    </div>
</template>

<script setup>
import { ArrowRightOutlined } from "@ant-design/icons-vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const props = defineProps({
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
        align-items: center;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        transition-property: all;
        transition-duration: 0.1s;
        transition-timing-function: linear;
        padding: 9px 16px 9px 70px;
        transition: all 0.3s ease;

        & > :first-child {
            opacity: 0;
            transform: translateX(-100%);
            transition: all 0.3s ease;
            visibility: hidden;
            font-size: 1em;
            margin-right: 0;
        }

        & > :nth-child(2) {
            transition: all 0.35s ease;
            margin-left: -12px;
        }

        &:hover {
            color: rgba(0, 0, 0, 0.87);
            background-color: #e5e5e5;

            & > :first-child {
                opacity: 1;
                transform: translateX(0);
                visibility: visible;
            }

            & > :nth-child(2) {
                margin-left: 0;
            }
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
