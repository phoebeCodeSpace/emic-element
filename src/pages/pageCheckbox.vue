<template>
  <div>
    <Checkbox v-model="data1"/>
  </div>
</template>

<script>
import Checkbox from "@/components/checkbox"
  export default {
    name: "page-checkbox",
    components: {
      Checkbox
    },
    data() {
      return {
        data1: 1
      }
    },
  }
</script>

<style scoped>

</style>