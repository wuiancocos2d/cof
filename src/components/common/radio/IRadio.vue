<template>
  <view>
    <view class="title"></view>
    <view class="flex" :class="{ 'flex-row': orientation === 'horizontal'}">
      <view v-for="opt in options"
            :key="opt.key"
            class="py-1 px-2 ml-1 border border-solid  rounded"
            :class="[selected === opt.value ? 'border-teal-600': 'border-slate-200']"
            @tap="handleSelect(opt)"
      >
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
  emits: ['select'],
  setup(props,{emit}) {
    const {options} = toRefs(props) as { value: any, label: string }[]
    const selected = ref(options.value[0]['value'])
    function handleSelect(option){
      selected.value = option.value
      emit('select',option)
    }
    return {
      selected,
      handleSelect
    }
  }
})
</script>

<style scoped>

</style>
