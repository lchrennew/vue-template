import { createApp } from 'vue'
import AntDesignVue from 'ant-design-vue'
import App from './App.vue'
import { router } from "./routes/routes.js";

createApp(App)
    .use(router)
    .use(AntDesignVue)
    .mount('#header')
