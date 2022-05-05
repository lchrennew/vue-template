import { createApp } from 'vue'
import App from './App.vue'
import SubApp from 'vue-msa-sub-app'
import 'ant-design-vue/dist/antd.less'

createApp(App)
    .use(SubApp)
    .mount('#app')
