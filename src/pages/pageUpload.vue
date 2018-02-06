<template>
  <div>
    <Upload action="https://jsonplaceholder.typicode.com/posts/">
      <Button icon="upload">上传文件</Button>
    </Upload>
  </div>
</template>

<script>
import Upload from "@/components/upload"
import Button from "@/components/button"

export default {
  name: "page-upload",
  components: {
    Upload,
    Button
  }
};
</script>