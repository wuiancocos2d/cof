<template>
  <view class="relative">
    <view class="wrapper h-24">
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
        <view class="action absolute right-0 bottom-0">
          <AtButton v-if="state === 'add'" @click="()=>selectSpecification()">选规格</AtButton>
        </view>
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
  emits: ['selectOpt'],
  setup(props,{emit}) {
    const state = ref('add')
    function getTags(): string[] {
      if (!isString(props.product?.tags)) return []
      return props.product?.tags.split(';')
    }
    function selectSpecification() {
      emit('selectOpt',props.product)
    }
    return {
      state,
      getTags,
      numberToPrice,
      selectSpecification
    }
  }
})
</script>

<style scoped>

</style>
