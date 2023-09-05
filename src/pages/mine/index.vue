<template>
  <view class="index">

  </view>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import './index.less'
import Taro from "@tarojs/taro";

export default defineComponent({
  setup () {
    const msg = ref('Hello world')
    async function validLogin(){
      const token = Taro.getStorageSync('token')
      if(token) return;
      await Taro.redirectTo({url: '/pages/login/index'})
    }
    onMounted(async ()=>{
      await validLogin()
    })
    return {
      msg
    }
  }
})
</script>
