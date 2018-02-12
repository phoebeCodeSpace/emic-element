<template>
      <transition-group tag="ul" :class="fileListClass" name="list">
        <li v-for="(file,index) in fileList" :key="index" >  
          <p :class="{'uploaded':file.percent===100}">
            <Icon type="order"/> <span class="file-list-name">{{ file.name }}</span>
            <Icon type="close" class="icon-list-end" @click="remove(file)"/>             
          </p>
          <Progress :percent="parseInt(file.percent, 10)" v-show="file.showProgress"/>
        </li>
      </transition-group>
</template>

<script>
import { prefixCls } from "@/utils/config";
import Progress from "@/components/progress";
import Icon from "@/components/icon";

export default {
  name: "upload-list",
  components: {
    Icon,
    Progress
  },
  props: {
    fileList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      // key: value
    }
  },
  computed: {
    fileListClass() {
      return [`${prefixCls}-file-list`];
    }
  },
  methods: {
    remove(file) {
      this.$emit('remove',file)
    }
  },
  watch: {
    fileList(val) {
      // console.log(val);
    }
  }
};
</script>