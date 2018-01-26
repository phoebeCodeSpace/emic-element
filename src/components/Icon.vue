<template>
  <i :class="iconClasses"></i>
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
};
</script>

<style scoped>

</style>