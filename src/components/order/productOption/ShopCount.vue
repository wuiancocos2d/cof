<template>
  <view>
    <AtInputNumber @change="handleChange"
                   :step="1"
                   type="number"
                   :width="300"
                   :min="0"
                   :max="10"
                   v-model:value ="current"/>
  </view>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref, watch} from "vue";
import {Product} from "@/components/order/coffee-category-list/type";

export default defineComponent({
  name: "shop-count",
  props: {
    price: {
      type: Number
    },
    initNum: {
      type: Number
    }
  },
  setup(props){
    const amount = ref(0)
    const current = ref(0)
    function handleChange(v){
      debugger
    }
    watch(()=> props.initNum,(newNum)=>{
      if(newNum) current.value = newNum
    },{immediate: true})
    return {
      amount,
      current,
      handleChange
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
