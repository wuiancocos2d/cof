<template>
  <view class="coffee-order">
    <CoffeeShopOrder></CoffeeShopOrder>
    <CoffeeCategoryList></CoffeeCategoryList>
  </view>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import './index.less'
import {CoffeeShopOrder} from "@/components/order/orderComponents";
import CoffeeCategoryList from "@/components/order/coffee-category-list/coffeeCategoryList.vue";

export default defineComponent({
  components: {
    CoffeeCategoryList,
    CoffeeShopOrder,
  },
  setup () {

    return {
    }
  }
})
</script>
