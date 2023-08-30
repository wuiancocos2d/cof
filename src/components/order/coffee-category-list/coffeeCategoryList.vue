<template>
  <view>
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
import {defineComponent, onMounted, ref} from "vue";
import {AtTabs, AtTabsPane} from "taro-ui-vue3";
import {getAllShopCateGory} from "@/components/order/coffee-category-list/api";

export default defineComponent({
  name: "coffeeCategoryList",
  components: {
    AtTabs,
    AtTabsPane
  },
  setup(){
    const category_tabs = ref([])
    const current_category = ref<string>()
    async function handleCategoryClick(){}
    onMounted(()=>{
      category_tabs.value = getAllShopCateGory()
    })
    return {
      category_tabs,
      current_category,
      handleCategoryClick
    }
  }
})
</script>

<style scoped>

</style>
