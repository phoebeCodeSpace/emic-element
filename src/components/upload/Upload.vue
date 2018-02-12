<template>
  <div :class="uploadWrapClass">
    <label @click="handleClick">
      <slot></slot>
      <input type="file" @change="handleChange" ref="input" :name="name"
        :multiple="multiple"
        :accept="accept"
      >
    </label>
    <slot name="tip"></slot>
    <UploadList :file-list="fileList" @remove="handleRemove"/>
  </div>
</template>

<script>
import { prefixCls } from "@/utils/config";
import { typeOf } from "@/utils/assist";
import Icon from "@/components/icon";
import UploadList from "./UploadList";
import ajax from "./ajax";
export default {
  name: "upload",
  components: {
    Icon,
    UploadList
  },
  props: {
    action: {
      type: String,
      required: true
    },
    headers: {
      type: Object,
      default() {
        return {};
      }
    },
    data: Object,
    multiple: {
      type: Boolean,
      default: false
    },
    accept: String,
    name: {
      type: String,
      default: "file"
    },
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    defaultFileList: {
      type: Array,
      default() {
        return [];
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
      fileList: this.defaultFileList,
      tempIndex: 1,
      timer: null
    };
  },
  methods: {
    handleClick() {
      this.$refs.input.click();
    },
    handleChange(e) {
      const files = e.target.files;
      const fileList = [...files];
      fileList.map(file => {
        this.handleStart(file);
        this.post(file);
      });
      this.$refs.input.value = null;
    },
    handleStart(file) {
      const uid = Date.now() + this.tempIndex++;
      file.uid = uid;
      file.percent = 0;
      file.showProgress = true;

      this.fileList.push(file);
    },
    post(file) {
      ajax({
        headers: this.headers,
        name: this.name,
        file,
        data: this.data,
        action: this.action,
        onProgress: e => {
          this.handleProgress(e, file);
        },
        onSuccess: res => {
          this.handleSuccess(res, file);
        },
        onError: (err, response) => {
          this.handleError(err, response, file);
        }
      });
    },
    handleProgress(e, file) {
      const _file = this.findFile(file);
      _file.percent = e.percent || 0;
    },
    handleSuccess(res, file) {
      const _file = this.findFile(file);
      _file.showProgress = false;
    },
    handleError(err, response, file) {},
    handleRemove(file){
      const fileList = this.fileList;
      fileList.splice(fileList.indexOf(file), 1);
      console.log(fileList)
      console.log(this.fileList)
      this.$emit('remove',file,fileList)
    },
    findFile(file, cb) {
      const fileList = this.fileList.slice(0);
      this.$nextTick(() => {
        this.fileList = fileList;
      });
      return fileList.filter(item => item.uid === file.uid)[0];
    }
  },
  destroyed() {}
};
</script>