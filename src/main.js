import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap-icons/font/bootstrap-icons.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(router);
app.use(ElementPlus)
app.mount("#app");