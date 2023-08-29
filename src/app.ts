import { createApp } from 'vue'
import './app.less'
import './tailwindcss.css'
import {createPinia} from "pinia";
import {setupStore} from "@/store";
const App = createApp({
  onShow (options) {
    console.log('App onShow.')
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
setupStore(App)
export default App
