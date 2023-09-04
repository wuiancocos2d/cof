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
import {productList} from "@/api/order";
import {getShopID} from "@/config/constance";
import {useLoad} from "@tarojs/taro";
import {getTaroLocation} from "@/utils/location";

export default defineComponent({
  components: {
    CoffeeCategoryList,
    CoffeeShopOrder,
  },
  setup () {
    const msg = ref('Hello world')
    async function getAllList(){
      const location =  await getTaroLocation()
      if(!location) return;
      const geo = `${location.longitude},${location.latitude}`
      const allShopItem = await productList({geo,shopId:getShopID()})
      debugger
    }
    useLoad(async ()=>{
      await getAllList()
    })
    return {
      msg
    }
  }
})
</script>
