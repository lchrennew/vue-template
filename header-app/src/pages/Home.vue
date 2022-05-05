<template>

</template>

<script setup>

</script>

<style lang="less">
.side.header .ant-badge{
    position: absolute;
    top: 0;
    left: 1.5em;
    .ant-scroll-number {
        background-color: #ff9800;
    }
}
</style>

<style scoped lang="less">
.side {
    flex-grow: 0;
    flex-shrink: 0;

    &.header {
        background-color: #42b983;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.5em;

        & > div {
            display: flex;
            flex-direction: column;
            align-items: center;


            button {
                border: none;
                background-color: transparent;
                margin: 0;
                color: #fff;
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

                &:hover {
                    background-color: rgba(0, 0, 0, 0.1);
                }
            }
        }
    }

    &.menu {
        width: 200px;
        background-color: #fff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
}

.content {
    flex: 1 0;
    background-color: rgba(180, 180, 199, 0.5);
    display: flex;
    flex-direction: row;


}
</style>
