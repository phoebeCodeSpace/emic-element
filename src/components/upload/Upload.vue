<template>
  <div :class="uploadWrapClass">
    <label @click="handleClick">
      <slot></slot>
      <input type="file" @change="change" ref="input" name="file"
        :multiple="multiple"
      >
    </label>
    <ul>
      <li v-for="(file,index) in fileList" :key="index">
        {{ file.name }}
      </li>
    </ul>
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
    multiple: Boolean,
    data: {
      type: Object,
      default(){
        return {}
      }
    },
    accept: String,
    defaultFileList: {
      type: Array,
      default(){
        return []
      }
    }
  },
  computed: {
    uploadWrapClass() {
      return [`${prefixCls}-upload`];
    }
  },
  data() {
    return {
      fileList: this.defaultFileList
    };
  },
  methods: {
    handleClick() {
      this.$refs.input.click();
    },
    change(e) {
      const files = e.target.files;
      if(multiple){
        this.fileList = [...this.fileList,...files]        
      }else{
        this.fileList = [files[0]]
      }
      console.log(this.fileList)
     
    }
  }
};
</script>