<template>
  <view>
    <view class="wrapper">
      <view class="cover"><img :src="product?.cover" :alt="product.name"></view>
      <view class="info">
        <view class="productTitle">{{product?.name}}</view>
        <view class="tags">
          <view class="tag" v-for="tag in getTags()" :key="tag">
            {{tag}}
          </view>
        </view>
        <div class="price">
          ￥{{numberToPrice(product?.fee)}}
        </div>
      </view>
      <view class="action">
        <button v-if="state === 'add'">选规格</button>

      </view>
    </view>
  </view>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from "vue";
import {Product} from "@/components/order/coffee-category-list/type";
import {isString} from "@/utils/is";
import {numberToPrice} from "@/utils/number";

export default defineComponent({
  name: "CategoryListItem",
  props: {
    product: {
      type: Object as PropType<Product>
    },
  },
  setup(props){
    const state = ref('add')
    function getTags(): string[]{
      if(!isString(props.product?.tags)) return []
      return props.product?.tags.split(';')
    }
    return {
      state,
      getTags,
      numberToPrice
    }
  }
})
</script>

<style scoped>

</style>
