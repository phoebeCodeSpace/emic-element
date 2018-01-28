<template>
  <div>
    <Pagination :total="5"></Pagination>
    <br/>
    <Pagination :total="10" showTotal></Pagination>    
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
export default {
  name: 'page-pagination',
  components:{
    Pagination
  }
}
</script>