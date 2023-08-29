<template>
  <view class="index">
    <CoffeeShopOrder></CoffeeShopOrder>
  </view>
</template>

<script lang="ts">
import { ref } from 'vue'
import './index.less'
import {CoffeeShopOrder} from "@/components/order/orderComponents";

export default {
  components: {
    CoffeeShopOrder
  },

  setup () {
    const msg = ref('Hello world')
    return {
      msg
    }
  }
}
</script>
