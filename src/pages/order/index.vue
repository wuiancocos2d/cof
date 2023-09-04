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
import {useAppStore} from "@/store/modules/app";
import {useLoad} from "@tarojs/taro";

export default defineComponent({
  components: {
    CoffeeCategoryList,
    CoffeeShopOrder,
  },
  setup () {
    const msg = ref('Hello world')
    const appStore = useAppStore()
    async function getAllList(){
      const location = await appStore.getGeo()
      debugger
      const allShopItem = await productList({shopId:getShopID()})
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
