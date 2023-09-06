import { createApp } from 'vue'
import './app.less'
import './tailwindcss.css'
import './style/index.scss'
import 'taro-ui-vue3/dist/style/index.scss'
import {setupStore} from "@/store";
import Taro from "@tarojs/taro";
import {code2session} from "@/api/app";
import {useTuv} from "@/taroUI";
const App = createApp({
  onShow (options) {
    console.log('App onShow.')
  },
  onLaunch(){
    let extConfig = Taro.getExtConfigSync? Taro.getExtConfigSync(): {}
    Taro.login({
      success: async (result) => {
        if (!result.code) return;
        const sessionInfo = await code2session(result.code).catch((err)=>{
          console.log(err)
        })
        if (!sessionInfo) return
        Taro.setStorageSync('openid', sessionInfo.openid || '')
        Taro.setStorageSync('unionid', sessionInfo.unionid || '')
        Taro.setStorageSync('token', sessionInfo.token || '')
        if (!sessionInfo?.token) return;
      }
    })
  }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
//store
setupStore(App)
//全局组件
useTuv(App)


export default App
