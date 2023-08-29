<template>
  <view>
    <view class="content flex flex-row flex-nowrap px-3 justify-between">
      <view class="shop-info flex flex-col ">
        <view class="shop font-medium text-base">
          {{ currentShop.company }} | {{ currentShop.shopName }}
        </view>
        <view class="distance text-xs">
          距离您{{ distance }}km
        </view>
        <view class="announcement flex flex-row nowrap">
          <image style="width:15px;height: 12px"
                 class="announceImg"
                 :src="announceIcon"></image>
          <view class="announce text-xs">{{ announcement }}</view>
        </view>
      </view>
      <view class="banner">
        <image class="banner-img w-full h-full"
               :src="testBanner"
               style="width: 50px;height: 50px"></image>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {CoffeeShopType} from "@/components/order/coffee-shop-order/coffeeShopType";
import announceIcon from '@/static/images/icon/announce.png'
import testBanner from '@/static/images/banner/shopBanner.png'

export default defineComponent({
  name: "CoffeeShopOrder",
  setup() {
    const currentShop = ref<CoffeeShopType>({
      company: '牛九咖啡coffee',
      shopName: '海珠店',
      bannerImg: '@/static/images/banner/shopBanner.png'
    })
    const announcement = ref<string>('公告展示/科技公告展示/科技公告展示')
    const distance = ref<number>(0.88)
    return {
      currentShop,
      announcement,
      distance,
      announceIcon,
      testBanner
    }
  }
})
</script>

<style scoped lang="less">
.shop-info {
  .shop {
    font-weight: 500;
    font-size: 16px;
    line-height: 22.4px;
  }
}
.banner-img {
  width: 50px;
  height: 50px;
}

.announceImg {
  width: 15px;
  height: 12px;
}

.banner {
  min-width: 50px;
  min-height: 50px;
}
</style>
