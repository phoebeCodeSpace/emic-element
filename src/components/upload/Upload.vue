<template>
  <div :class="uploadWrapClass">
    <label>
      <slot></slot>
      <input type="file" @change="change">
    </label>
  </div>
</template>

<script>
import { prefixCls } from "@/utils/config";

export default {
  name: "upload",
  props: {
    action: {
      type: String,
      required: true 
    },
  },
  computed: {
    uploadWrapClass(){
      return [`${prefixCls}-upload`]
    }
  },
  methods: {
    change(e) {
      console.log(e)
    }
  },
};
</script>