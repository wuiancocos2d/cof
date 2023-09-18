<template>
  <AtModal v-bind="$attrs">
    <view v-if="product?.attr">
      <view v-for="attr in productAttr" :key="attr.attrId">
        <view class="cover" v-if="attr.cover"><image :src="attr.cover"/></view>
        <AtButton formType='reset'>重置</AtButton>
        <view>{{attr.name}}</view>
        <view v-for="item in attr.attrItem">
          <AtRadio  :options="getOpt(item)"></AtRadio>
        </view>

      </view>
    </view>
  </AtModal>
</template>

<script lang="ts">
import {AtModal, AtForm, AtRadio} from 'taro-ui-vue3'
import {computed, PropType, reactive, toRefs} from "vue";
import {Product, ProductAttr, ProductAttrItem} from "@/components/order/coffee-category-list/type";

export default {
  name: "ProductOption",
  components: {
    AtModal,
    AtForm,
    AtRadio
  },
  props: {
    product: {
      type: Object as PropType<Product>
    }
  },
  setup(props){
    const userPrefer = reactive()
    const productAttr = computed(()=> props.product?.attr)
    function getOpt(item: ProductAttrItem){
      if(!Array.isArray(item)) return []
      return item.map(i => ({
        label: i.name,
        value: i.attrItemId,
        desc: i.fee
      }))
    }
    return {
      productAttr,
      getOpt,
      ...toRefs(userPrefer)
    }
  }
}
</script>

<style scoped>

</style>
