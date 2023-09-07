<template>
  <view class="pt-1 container">
    <AtTabs
      :current="current"
      scroll
      height='500px'
      tabDirection='vertical'
      :tabList="category_tabs"
      @click="handleCategoryClick">
      <AtTabsPane v-for="(category,index) in category_tabs" :key="index" tabDirection='vertical' :current="current" :index="0">
        <view class="title">{{category.name}}</view>
        <view v-for="product in category.products" :key="product.productId">
          <CategoryListItem :product="product"/>
        </view>
      </AtTabsPane>
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
