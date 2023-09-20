<template>
  <view>
    <view class="wrapper">
      <view class="total">
        总计{{amount}}
      </view>
      <view class="action">
        <view class="car">加入购物车</view>
        <view class="addNum">
          <AtInputNumber></AtInputNumber>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "shop-count",
  setup(){
    const amount = ref(0)
    return {
      amount
    }
  }
})
</script>

<style scoped>

</style>
