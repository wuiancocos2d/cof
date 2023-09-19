<template>
  <AtModal v-bind="$attrs" class="full-width w-full min-w-full">
    <view v-if="product?.attr">
      <view v-for="attrItem in productAttr" :key="attrItem.attrId">
        <view class="cover" v-if="attrItem.cover"><image :src="attrItem.cover"/></view>
        <view>{{attrItem.name}}</view>
        <IRadio v-model:value="userPrefer[attrItem.attrId]" :options="getOpt(attrItem.attrItem)"></IRadio>
      </view>
    </view>
  </AtModal>
</template>

<script lang="ts">
import {AtModal} from 'taro-ui-vue3'
import {computed, onMounted, PropType, reactive, toRefs} from "vue";
import {Product, ProductAttr, ProductAttrItem} from "@/components/order/coffee-category-list/type";
import {IRadio} from "@/components/common";

export default {
  name: "ProductOption",
  components: {
    AtModal,
    IRadio
  },
  props: {
    product: {
      type: Object as PropType<Product>
    }
  },
  setup(props){
    const productAttr = computed(()=> props.product?.attr)
    const userPrefer = reactive(getForm())
    function getOpt(item: ProductAttrItem[]){
      if(!Array.isArray(item)) return []
      return item.map(i => ({
        label: i.name,
        value: i.attrItemId.toString(),
        desc: i.fee
      }))
    }
    function getForm(){
      if(!Array.isArray(productAttr.value)) return;
      return productAttr.value.reduce((model,item)=>{
        model[item.attrId] =  item.attrItem[0]['attrItemId']
        return model
      },{})
    }

    return {
      productAttr,
      getOpt,
      userPrefer,
      ...toRefs(userPrefer)
    }
  }
}
</script>

<style scoped>

</style>
