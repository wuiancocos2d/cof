<template>
  <view>
    <view class="wrapper">
      <div class="total">
        总计{{amount}}
      </div>

    </view>
  </view>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "shop-count",
  setup(){
    const amount = ref(0)
    return {
      amount
    }
  }
})
</script>

<style scoped>

</style>
