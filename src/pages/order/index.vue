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
import {productAll, productCategory, productList} from "@/api/order";
import {getShopID} from "@/config/constance";
import {useLoad} from "@tarojs/taro";
import {getTaroLocation} from "@/utils/location";

export default defineComponent({
  components: {
    CoffeeCategoryList,
    CoffeeShopOrder,
  },
  setup () {
    useLoad(async ()=>{
    })
    return {
    }
  }
})
</script>
