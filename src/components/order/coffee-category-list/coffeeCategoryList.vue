<template>
  <view class="pt-1 container">
    <AtTabs
      :current="current"
      :tabList="category_tabs"
      tabDirection='vertical'
      scroll
      height="100%"
      @click="handleCategoryClick"
    >
      <view v-for="(category,index) in category_tabs"  :key="category.productCategoryId">
        <AtTabsPane
          tabDirection='vertical'
          :current="current"
          :index="index"
        >
          <view class="categoryTitle">{{ category.name }}|{{ index }}|{{ current }}</view>
          <view v-for="product in category?.products" :key="product.productId" class="tab-content h-24">
            <CategoryListItem :product="product"/>
          </view>
        </AtTabsPane>
      </view>
    </AtTabs>
  </view>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, unref} from "vue";
import {AtTabs, AtTabsPane} from "taro-ui-vue3";
import {productAll} from "@/api/order";
import {getShopID} from "@/config/constance"
import {useDidShow} from "@tarojs/taro";
import CategoryListItem from "@/components/order/coffee-category-list/categoryListItem/CategoryListItem.vue";
import {AllShopItem} from "@/components/order/coffee-category-list/type";

export default {
  name: "CoffeeCategoryList",
  components: {
    AtTabs,
    AtTabsPane,
    CategoryListItem
  },
  setup() {
    const category_tabs = ref<AllShopItem[]>([])
    const current = ref<number>(0)

    async function handleCategoryClick(tabV) {
      current.value = tabV
    }

    async function getCategory() {
      const res = await productAll(getShopID())
      if (!Array.isArray(res)) return
      category_tabs.value = res.map(item => ({...item, title: item.name}))
    }

    useDidShow(async () => {
      await getCategory()
    })
    return {
      category_tabs,
      current,
      handleCategoryClick
    }
  }
}
</script>

<style scoped lang="scss">

</style>
