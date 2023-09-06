<template>
  <view>
    <view class="title">

    </view>
  </view>
</template>

<script>
import {defineComponent, onMounted, ref} from "vue";
import {productAll} from "@/api/order";
import {getShopID} from "@/config/constance";

export default defineComponent({
  name: "CategoryList",
  props: {
    category: {
      required: true
    }
  },
  setup(){
    const allShopItem = ref([])
    async function getAllShopItem(){
      allShopItem.value = await productAll(getShopID())
    }
    onMounted(async ()=>{
      await getAllShopItem()
    })
    return {

    }
  }
})
</script>

<style scoped>

</style>
