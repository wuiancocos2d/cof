import { createApp } from 'vue'
import './app.less'
import './tailwindcss.css'
import './style/index.scss'
import 'taro-ui-vue3/dist/style/index.scss'
import {setupStore} from "@/store";
import Taro from "@tarojs/taro";
import {defHttp} from "@/utils/defHttp";
import {code2session} from "@/api/app";
const App = createApp({
  onShow (options) {
    console.log('App onShow.')
  },
  onLaunch(){
    let extConfig = Taro.getExtConfigSync? Taro.getExtConfigSync(): {}
    Taro.login({
      success: async (result) => {
        if (!result.code) return;
        const sessionInfo = await code2session(result.code)
        if (!sessionInfo?.data) return
        Taro.setStorageSync('openid', sessionInfo.data.openid || '')
        Taro.setStorageSync('unionid', sessionInfo.data.unionid || '')
        Taro.setStorageSync('token', sessionInfo.data.token || '')
        if (!sessionInfo?.data?.token) return;
      }
    })
  }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
setupStore(App)



export default App
