<template>
  <view>
    <view class="wrapper h-24 relative">
      <view class="flex flex-row flex-nowrap">
        <view :style="{width: '82px'}" class="cover">
          <image class="w-full" :style="{width: '82px', height: '82px'}" :src="product?.cover" :alt="product.name"/>
        </view>
        <view class="info grow">
          <view class="productTitle">{{ product?.name }}</view>
          <view class="tags">
            <view class="tag flex flex-row flex-nowrap" v-for="tag in getTags()" :key="tag">
              {{ tag }}
            </view>
          </view>
          <div class="price">
            ￥{{ numberToPrice(product?.fee) }}
          </div>
        </view>
      </view>
      <view class="action absolute right-0 bottom-0">
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
  setup(props) {
    const state = ref('add')
    function getTags(): string[] {
      if (!isString(props.product?.tags)) return []
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
