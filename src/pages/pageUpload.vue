<template>
  <div style="width=300px">
    <h3>一次选择一个文件</h3>
    <Upload action="/Talk/CertEp/uploadFile">
      <Button icon="upload">上传文件</Button>
    </Upload>
    <h3>一次选择多个文件</h3>    
    <Upload action="/Talk/CertEp/uploadFile" multiple>
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