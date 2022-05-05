<template>
    <div class="menu-group">
        <div class="menu-group-header">
            {{ name }}
        </div>
        <div class="menu-group-container">
            <slot/>
        </div>
    </div>
</template>

<script setup>
defineProps({
    name: { type: String, required: true }
})
</script>

<style scoped lang="less">
.menu-group {
    display: flex;
    flex-direction: column;

    .menu-group-header {
        padding: 24px 16px 20px 16px;
        position: relative;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        list-style: none;
        color: rgba(0, 0, 0, 0.6);
    }

    .menu-group-container {
        display: flex;
        flex-direction: column;

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

                &:after {
                    display: block;
                    transition: all 1s ease;
                    margin-top: -100%;
                    content: '';
                }

                .menu-item a {
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

            }

            &.open {
                .sub-menu-header > span > :first-child {
                    transform: rotate(90deg) scale(0.6);
                }

                .sub-menu-items:after {
                    margin-top: 0;
                }
            }

        }
    }
}
</style>
