<template>
    <button
      :class="classes"
      :disabled="disabled"
    >
      <slot></slot>
    </button>
</template>

<script>
import { prefixCls } from "@/utils/config";
export default {
  name: "Button",
  props: {
    size: String,
    round: Boolean,
    plain: Boolean,
    disabled: Boolean,
    type: String
  },
  computed: {
    classes() {
      return [`${prefixCls}-btn`,
      {
        [`${prefixCls}-btn-${this.size}`]:this.size,
        [`${prefixCls}-btn-${this.type}`]:this.type,
        'is-plain':this.plain,
        'is-round':this.round,
      }
        
      ]
    }
  },
};
</script>

<style scoped>

</style>