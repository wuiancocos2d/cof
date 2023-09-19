<template>
  <view>
    <view class="title"></view>
    <view class="flex" :class="{ 'flex-row': orientation === 'horizontal'}">
      <view v-for="opt in options" :key="opt.key" class=" ml-1 border border-teal-600 rounded">
        <view>{{ opt.label }}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import {defineComponent, ref, toRefs} from "vue";

export default defineComponent({
  name: "IRadio",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    orientation: {
      type: String,
      default: 'horizontal'
    }
  },
  setup(props) {
    const {options} = toRefs(props) as { value: any, label: string }[]
    const selected = ref(options.value[0]['value'])

    return {
      selected
    }
  }
})
</script>

<style scoped>

</style>
