<template>
  <view class="pt-1 container">
    <AtTabs
      :current="current_category"
      :tabList="category_tabs"
      tabDirection='vertical'
      @click="handleCategoryClick"
    >
      <AtTabsPane
        v-for="category in current_category"
        tabDirection='vertical'
        :key="category.id"
        :current="current_category"
        :index="category.id">
          <view></view>
      </AtTabsPane>
    </AtTabs>
  </view>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, unref} from "vue";
import {AtTabs, AtTabsPane} from "taro-ui-vue3";
import {getAllShopCateGory} from "@/components/order/coffee-category-list/api";

export default defineComponent({
  name: "coffeeCategoryList",
  components: {
    AtTabs,
    AtTabsPane
  },
  emits: ['category'],
  setup(_,{emit}){
    const category_tabs = ref([])
    const current_category = ref<string>()
    async function handleCategoryClick(tabV){
      current_category.value = tabV
    }
    function emitCategory(){
      const current = unref(category_tabs)?.find(item=> item.id === unref(current_category))
      if(!current) return
      emit('category',current)
    }
    function getCategory(){
      category_tabs.value = getAllShopCateGory()
    }
    onMounted(()=>{
      getCategory()
      emitCategory()
    })
    return {
      category_tabs,
      current_category,
      handleCategoryClick
    }
  }
})
</script>

<style scoped lang="scss">

</style>
