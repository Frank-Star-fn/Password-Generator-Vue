// import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus' // 导入 ElementPlus 组件库的所有模块和功能 
import 'element-plus/dist/index.css' // 导入 ElementPlus 组件库所需的全局 CSS 样式
import App from './App.vue'

document.title = '在线随机密码生成器';


// createApp(App).mount('#app')
const app = createApp(App)
app.use(ElementPlus) // 将 ElementPlus 插件注册到 Vue 应用中
app.mount('#app')
