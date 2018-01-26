<template>
  <span :class="switchClass" @click="toggle">
    <input type="hidden" :value="currentValue">
  </span>
</template>

<script>
import { prefixCls } from "@/utils/config";

export default {
  name: "SwitchBtn",
  data() {
    return {
      currentValue: this.value
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled:Boolean
  },
  computed: {
    switchClass() {
      return [
        `${prefixCls}-switch`,
        {[`${prefixCls}-switch-checked`]:this.currentValue},
        {[`${prefixCls}-switch-disabled`]:this.disabled}        
      ]
    }
  },
  methods: {
    toggle() {
      !this.disabled && 
      (this.currentValue = !this.currentValue)
    }
  }
};
</script>