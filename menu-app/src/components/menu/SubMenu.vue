<template>
    <div class="sub-menu" :class="{open}">
        <div class="sub-menu-header">
                        <span @click="toggle">
                            <right-outlined/>
                            <component :is="icon"/>
                            {{ name }}
                        </span>
        </div>
        <div class="sub-menu-items" ref="items">
            <slot/>
        </div>
    </div>
</template>

<script setup>
import { RightOutlined } from "@ant-design/icons-vue";
import { onMounted, onUpdated, ref } from "vue";

const props = defineProps({
    icon: Function,
    name: String,
    open: Boolean,
    prefixes: Array,
})
const emit = defineEmits([ 'update:open' ])
const open = ref(props.open)

const toggle = () => {
    open.value = !open.value
    emit('update:open', open.value)
}

const items = ref()

const itemsHeight = ref(`0`)

const updateItemsHeight = () => itemsHeight.value = `${items.value?.scrollHeight ?? 0}px`

onMounted(() => {
    updateItemsHeight()
})

onUpdated(() => {
    updateItemsHeight()
})


</script>

<style scoped lang="less">
.sub-menu {

    .sub-menu-header {
        padding: 0 16px 0 0;
        position: relative;

        & > span {
            width: 100%;
            display: flex;
            padding: 9px 16px 9px 32px;
            align-items: center;
            border-top-right-radius: 30px;
            border-bottom-right-radius: 30px;
            cursor: pointer;
            transition-duration: 0.1s;
            transition-property: all;
            transition-timing-function: linear;

            &:hover {
                color: rgba(0, 0, 0, 0.87);
                background-color: #e5e5e5;
            }

            & > :first-child {
                left: 8px;
                z-index: 1;
                position: absolute;
                transform: scale(0.6);
                transition-duration: 0.1s;
                transition-property: all;
                transition-timing-function: linear;
            }

            & > :nth-child(2) {
                font-size: 20px;
                margin-right: 16px;
            }
        }
    }

    .sub-menu-items {
        overflow: hidden;
        height: 0;
        transition: all 0.3s ease;
    }

    &.open {
        .sub-menu-header > span > :first-child {
            transform: rotate(90deg) scale(0.6);
        }

        .sub-menu-items {
            height: v-bind(itemsHeight);
        }
    }

}
</style>
