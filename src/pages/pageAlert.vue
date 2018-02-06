<template>
  <div>
    <Alert :showIcon="false">一般消息提示</Alert>    
    <Alert>一般消息提示</Alert>
    <Alert center>一般消息提示</Alert>
    <Alert type="warning">警告消息提示</Alert>
    <Alert type="success">成功消息提示</Alert>  
    <Alert type="error">错误消息提示</Alert>   
    <Alert type="error" closeable>错误消息提示</Alert>    
  </div>
</template>


<script>
import Alert from "@/components/alert"
  export default {
    name: 'page-alert',
    components:{
      Alert
    }
  }
</script>

<style scoped>

</style>