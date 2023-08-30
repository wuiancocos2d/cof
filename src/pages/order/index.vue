<template>
  <view class="coffee-order">
    <CoffeeShopOrder></CoffeeShopOrder>
    <CoffeeCategoryList></CoffeeCategoryList>
  </view>
</template>

<script lang="ts">
import { ref } from 'vue'
import './index.less'
import {CoffeeShopOrder} from "@/components/order/orderComponents";
import CoffeeCategoryList from "@/components/order/coffee-category-list/coffeeCategoryList.vue";

export default {
  components: {
    CoffeeCategoryList,
    CoffeeShopOrder,
  },

  setup () {
    const msg = ref('Hello world')
    return {
      msg
    }
  }
}
</script>
