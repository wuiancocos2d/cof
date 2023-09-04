<template>
  <view class="coffee-order">
    <CoffeeShopOrder></CoffeeShopOrder>
    <CoffeeCategoryList></CoffeeCategoryList>
  </view>
</template>

<script lang="ts">
import {onMounted, ref} from 'vue'
import './index.less'
import {CoffeeShopOrder} from "@/components/order/orderComponents";
import CoffeeCategoryList from "@/components/order/coffee-category-list/coffeeCategoryList.vue";
import {productAll} from "@/api/order";
import {getShopID} from "@/config/constance";

export default {
  components: {
    CoffeeCategoryList,
    CoffeeShopOrder,
  },

  setup () {
    const msg = ref('Hello world')
    async function getAllList(){
      const allShopItem = await productAll(getShopID())
      debugger
    }
    onMounted(()=>{
      getAllList()
    })
    return {
      msg
    }
  }
}
</script>
