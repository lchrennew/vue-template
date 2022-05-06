<template>
    <router-link to="/">
        <div id="logo">
            <svg width="464" height="155" viewBox="0 0 464 155" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <metadata>Author: Chun Li</metadata>
                <g stroke="none" stroke-width="0" fill="none" fill-rule="evenodd">
                    <path d="M262.7 5h161.6C438 5 443 6.4 448 9.1c5 2.7 9 6.7 11.8 11.8 2.7 5 4.1 10 4.1 23.8v39.6c0 13.8-1.4 18.8-4.1 23.8-2.7 5-6.7 9-11.8 11.8-5 2.7-10 4.1-23.8 4.1H262.7c-13.8 0-18.8-1.4-23.8-4.1-5-2.7-9-6.7-11.8-11.8-2.7-5-4.1-10-4.1-23.8V44.7c0-13.8 1.4-18.8 4.1-23.8 2.7-5 6.7-9 11.8-11.8 5-2.7 10-4.1 23.8-4.1Z"
                          fill="#42B983"/>
                    <text font-family="LogoFont Primary" font-size="103" class="logo primary">
                        <tspan x="240" y="101" fill="#FFF">云敏</tspan>
                        <tspan x="0" y="101" fill="#000" >光大</tspan>
                    </text>
                    <text font-family="LogoFont Secondary" font-size="24" letter-spacing="5" fill="#000" fill-opacity=".5" class="logo secondary">
                        <tspan x="18" y="154">EVERBRIGHT AGILE CLOUD</tspan>
                    </text>
                </g>
            </svg>

        </div>
    </router-link>
</template>

<style scoped lang="less">
#logo {
    display: flex;
    padding: 10px 20px;
    align-items: center;
    justify-content: center;

    svg{
        width: 80%;
        height: auto;
        user-select: none;
    }
}
</style>
