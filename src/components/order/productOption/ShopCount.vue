<template>
  <view>
    <view class="wrapper flex flex-row justify-between">
      <view class="total">
        总计{{amount}}
      </view>
      <view class="action flex flex-row flex-nowrap">
        <view class="car">加入购物车</view>
        <view class="addNum">
          <AtInputNumber></AtInputNumber>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from "vue";
import {Product} from "@/components/order/coffee-category-list/type";

export default defineComponent({
  name: "shop-count",
  props: {
    product: {
      type: Object as PropType<Product>
    }
  },
  setup(){
    const amount = ref(0)
    return {
      amount
    }
  }
})
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
}
</style>
