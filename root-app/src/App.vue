<template>
    <div id="header" class="side header">
        <sub-app base="http://localhost:3001/" name="header"/>
    </div>
    <div id="menu" class="side menu">
        <sub-app base="http://localhost:3002/" name="menu"/>
    </div>
    <div id="feature" class="content"></div>
</template>

<style lang="less">
html, body {
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    background-color: #f4f4f7;

    .side {
        flex-grow: 0;
        flex-shrink: 0;

        &.header {
            background-color: #42b983;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0.5em;
            width: 3em;
            box-sizing: content-box;
        }

        &.menu {
            width: 201px;
            background-color: #fff;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        }
    }

    .content {
        flex: 1 0;
        display: flex;
        flex-direction: row;


    }
}
</style>
