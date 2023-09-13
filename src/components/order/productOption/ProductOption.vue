<template>
  <AtModal v-bind="$attrs">
    <view v-if="product">
      <view v-for="attr in product.attr" :key="attr.attrId">
        <view class="cover" v-if="attr.cover"><image :src="attr.cover"/></view>
        <view class="name">{{attr.name}}</view>

      </view>
    </view>
  </AtModal>
</template>

<script lang="ts">
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui-vue3'
import {PropType, reactive, toRefs} from "vue";
import {Product} from "@/components/order/coffee-category-list/type";
export default {
  name: "ProductOption",
  components: {
    AtModal,
  },
  props: {
    product: {
      type: Object as PropType<Product>
    }
  },
  setup(){
    const userPrefer = reactive({

    })
    return {
      ...toRefs(userPrefer)
    }
  }
}
</script>

<style scoped>

</style>
