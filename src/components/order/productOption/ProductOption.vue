<template>
  <AtModal v-bind="$attrs" class="full-width w-full min-w-full">
    <view v-if="product?.attr">
      <view v-for="attrItem in productAttr" :key="attrItem.attrId">
<!--        <view class="cover" v-if="attrItem.cover"><image :src="attrItem.cover"/></view>-->
        <view>{{attrItem.name}}</view>
        <IRadio
          v-model:value="userPrefer[attrItem.attrId]"
          @select="handleSelect"
          :options="getOpt(attrItem)">
        </IRadio>
      </view>
      <ShopCount :price="totalCost" :initNum="preferNum"></ShopCount>
    </view>
  </AtModal>
</template>

<script lang="ts">
import {AtModal} from 'taro-ui-vue3'
import {computed, onMounted, PropType, reactive, ref, toRefs, watch} from "vue";
import {Product, ProductAttr, ProductAttrItem} from "@/components/order/coffee-category-list/type";
import {IRadio} from "@/components/common";
import ShopCount from "@/components/order/productOption/ShopCount.vue";
import {carStore} from "@/store/modules/shopCar";

export default {
  name: "ProductOption",
  components: {
    AtModal,
    IRadio,
    ShopCount
  },
  props: {
    product: {
      type: Object as PropType<Product>,
      require: true
    }
  },
  setup(props){
    const productAttr = computed(()=> props.product?.attr)
    const userPrefer = reactive(getForm())
    const totalCost = ref(0)
    const preferNum = ref(0)
    function getOpt(item: ProductAttr){
      const {attrItem} = item
      if(!Array.isArray(attrItem)) return []
      return attrItem.map(i => ({
        label: i.name,
        value: i.attrItemId.toString(),
        desc: i.fee,
        org: i,
        parent: item
      }))
    }
    function getForm(){
      if(!Array.isArray(productAttr.value)) return;
      return productAttr.value.reduce((model,item)=>{
        model[item.attrId] =  item.attrItem[0]['attrItemId']
        return model
      },{})
    }
    function handleSelect(opt){
      const {attrId} = opt.parent
      if(!userPrefer[attrId]) return;
      userPrefer[attrId] = opt.org.attrItemId
      console.log('userPrefer',userPrefer)
    }

    watch(userPrefer,(prefer)=>{
      if(!Array.isArray(productAttr.value)) return;
      const userSelectArr = getSelectArr(prefer)
      totalCost.value = updateAmount(userSelectArr)
      console.log(totalCost.value)
      updatePreferNum(userSelectArr)
    })

    function updateAmount(userSelectArr){
      if(!Array.isArray(userSelectArr)) return;
      const extra = userSelectArr.reduce((amount,item)=> {
         amount+=item.fee
        return amount
      },0)
      return extra + props.product?.fee
    }
    function updatePreferNum(userSelectArr){
      if(!props.product) return;
      const curr = carStore().getItemNum(props.product,userSelectArr)
      debugger
    }
    function getSelectArr(userPrefer):ProductAttrItem[]{
     const selectArr = []
     Object.keys(userPrefer).forEach((attrKey)=>{
       if(!productAttr.value) return
       const attrTarget = props.product?.attr.find(prdItem => prdItem.attrId.toString() === attrKey)
       if(attrTarget) {
        const selectItem = attrTarget.attrItem.find(atItem=> atItem.attrItemId === userPrefer[attrKey])
         if(selectItem) selectArr.push(selectItem)
       }
     })
      return selectArr
    }
    return {
      productAttr,
      getOpt,
      userPrefer,
      handleSelect,
      totalCost,
      preferNum,
      ...toRefs(userPrefer)
    }
  }
}
</script>

<style scoped>

</style>
