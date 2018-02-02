<template>
  <i :class="iconClasses" @click="handleClick"></i>
</template>

<script>
import { prefixCls } from "@/utils/config";

export default {
  name: "Icon",
  props: {
    type: String
  },
  computed: {
    iconClasses() {
      return [
        [`${prefixCls}-icon`,`icon-${this.type}`]
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