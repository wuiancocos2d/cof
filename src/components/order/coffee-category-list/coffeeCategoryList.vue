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
        :key="category.code"
        :current="current_category"
        :index="category.code">
          <view>
            <CategoryList :filter="category"></CategoryList>
          </view>
      </AtTabsPane>
    </AtTabs>
  </view>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, unref} from "vue";
import {AtTabs, AtTabsPane} from "taro-ui-vue3";
import { productCategory} from "@/api/order";
import {getShopID} from "@/config/constance"
import CategoryList from './categoryList/CategoryList.vue'
export default defineComponent({
  name: "CoffeeCategoryList",
  components: {
    AtTabs,
    AtTabsPane,
    CategoryList
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
    async function getCategory(){
      category_tabs.value = await productCategory(getShopID())
      debugger
    }
    onMounted(async ()=>{
      await getCategory()
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
