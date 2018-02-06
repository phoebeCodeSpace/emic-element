<template>
    <button
      :class="classes"
      :disabled="disabled"
      @click="handleClick"
    >
      <Icon :type="icon"/>
      <slot></slot>
    </button>
</template>

<script>
import { prefixCls } from "@/utils/config";
import Icon from '@/components/icon';
export default {
  name: "Button",
  components: {
    Icon
  },
  props: {
    size: String,
    round: Boolean,
    plain: Boolean,
    disabled: Boolean,
    type: String,
    icon: String
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
  methods: {
    handleClick(e) {
      this.$emit('click',e)
    }
  },
};
</script>

<style scoped>

</style>