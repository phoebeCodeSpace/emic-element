<template>
  <Layout id="app">
    <Header>
      <div class="logo">
        <!-- <img src="/static/images/logo.png"/> -->
      </div>
    </Header>
    
    <Content class="content">
      <Sidebar/>
      <router-view/>
    </Content>
  </Layout>
</template>

<script>
import { Layout, Header, Content,Sidebar, Footer } from "@/components/layout";

export default {
  name: 'App',
  components: {
    Layout,
    Header,
    Content,
    Sidebar,
    Footer
  }
}
</script>

<style lang="scss">
.content{
  margin: 15px;
}
table {
  width: 100%;
  border: 1px solid #222;
  margin-bottom: 10px;
  td {
    width: 25%;
    border-top: 1px solid #222;
  }
}
header{
  height: 80px;
  line-height: 80px;
}
</style>
