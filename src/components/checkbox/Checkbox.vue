<template>
  <label>
    <Icon type="unchecked"></Icon>
    <Icon type="checked"></Icon>
    <input type="checkbox">
  </label>
</template>

<script>
import Icon from "@/components/icon"
export default {
  name: "checkbox",
  components:{
    Icon
  },
  props: {
    data: [String, Number, Boolean]
  }
};
</script>

<style scoped>

</style>