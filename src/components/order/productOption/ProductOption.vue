<template>
  <AtModal v-bind="$attrs">
    <view v-if="product?.attr">
      <view v-for="attrItem in productAttr" :key="attrItem.attrId">
        <view class="cover" v-if="attrItem.cover"><image :src="attrItem.cover"/></view>
        <view>{{attrItem.name}}</view>
        <AtRadio v-model:value="userPrefer[attrItem.attrId]" :options="getOpt(attrItem.attrItem)"></AtRadio>
      </view>
    </view>
  </AtModal>
</template>

<script lang="ts">
import {AtModal, AtForm, AtRadio} from 'taro-ui-vue3'
import {computed, onMounted, PropType, reactive, toRefs} from "vue";
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
