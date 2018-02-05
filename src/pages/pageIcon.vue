<template>
  <div>
    <h3>表单类 from</h3>
    <Icon type="search"/>
    <Icon type="search-2"/>
    <Icon type="date"/>
    <Icon type="time"/>
    <Icon type="unchecked"/>
    <Icon type="checked"/>
    <Icon type="upload"/>
    <Icon type="refresh"/>
    
    <h3></h3>
    <Icon type="close"/>
    <h3>信息提示类 tips</h3>
    <Icon type="info"/>
    <Icon type="error"/>
    <Icon type="success"/>
    <Icon type="warning"/>
    <h3>方向类 direction</h3>
    <Icon type="arrow-left"/>
    <Icon type="arrow-up"/>
    <Icon type="arrow-right"/>
    <Icon type="arrow-down"/>
    <h3>loading</h3>
    <Icon type="loading"/>
    <Icon type="loading_icon"/>
    <h3>table</h3>    
    <Icon type="more"/>
    <Icon type="trash"/>
    <Icon type="edit"/>
    <Icon type="add"/>
    <h3>view</h3>
    <Icon type="order"/> 
    <Icon type="tips"/> 
    
  </div>
</template>

<script>
import Icon from '@/components/icon'
  export default {
    name: "page-icon",
    components:{
      Icon
    }
  }
</script>

<style scoped>

</style>